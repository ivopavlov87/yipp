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
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('images');
});


//IMAGES ROUTES
router.post('/', upload.single('image'), (req, res) => {
    res.redirect('/')
});


router.get('/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
       
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists',
            })
        }
      
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            const readstream = gfs.createReadStream(file.filename)
            readstream.pipe(res)
        } else {
            res.status(404).json({
                err: 'Not an image',
            })
        }
    })
})

router.get('/', (req, res) => {
    gfs.files.find().toArray((err, files) => {
      
        if (!files || files.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            });
        }

        return res.json(files);
    });
});

router.delete('/:id', (req, res) => {
  gfs.remove({ _id: req.params.id, root: 'images' }, (err, store) => {
    if (err) {
      return res.status(404).json({ err: err });
    }

    res.redirect('/');
  });
});





module.exports = router;