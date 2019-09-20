const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const mongoose = require('mongoose');

const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

// DB SETUP
const mongoURI = keys.mongoURI;

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return {
            bucketName: 'images',
            filename: file.originalname,
            metadata: req.body
        }
    }
});
const upload = multer({ storage });

const conn = mongoose.createConnection(mongoURI);
let gfs;

conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('images');
});


//IMAGES ROUTES
router.post('/upload', upload.single('image'), (req, res) => {
    const img = fs.readFileSync(req.file.path);
    const encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database
    const finalImg = {
        contentType: req.file.mimetype,
        image: new Buffer(encode_image, 'base64')
    };

    gfs.collection("images").insertOne(finalImg, (err, result) => {
        console.log(result)
        if (err) return console.log(err)
        console.log('saved to database')
    })
});

router.get('/files', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        // Check if files
        if (!files || files.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            });
        }

        // Files exist
        return res.json(files);
    });
});

module.exports = router;