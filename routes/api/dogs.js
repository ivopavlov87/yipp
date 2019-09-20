const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const mongoose = require('mongoose');
const passport = require('passport');

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const Dog = require('../../models/Dog');
const validateDogInput = require('../../validation/dogs');

const { formatDogs, formatDog } = require('../../util/responseHelpers');


router.get('/', (req, res) => {
    Dog.find()
        .sort({ date: -1 })
        .then(dogs => res.json(formatDogs(dogs)))
        // ANDY NOTES
        // instead of res.json(posts) -> (utilHelperFunc.post) to standardize backend response
        .catch(err => res.status(404).json({ nodogsfound: 'No dogs found' }));
});

// router.get('/user/:userId', (req, res) => {
//     Dog.find({ user: req.params.userId })
//         .sort({ date: -1 })
//         .then(dogs => res.json(dogs))
//         .catch(err =>
//             res.status(404).json({ nodogsfound: 'No dogs found from that user' }
//             )
//         );
// });


router.get('/:id', (req, res) => {
    Dog.findById(req.params.id)
        .then(dog => res.json(formatDog(dog)))
        .catch(err =>
            res.status(404).json({ nodogfound: 'No dog found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateDogInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newDog = new Dog({
            user: req.body.user,
            name: req.body.name,
            breed: req.body.breed,
            dob: req.body.dob,
            weight: req.body.weight,
            energy: req.body.energy,
            size: req.body.size,
            vaccinations: req.body.vaccinations,
            location: req.body.location
        });
        newDog.save().then(dog => res.json(formatDog(dog)));
    }
);

router.patch('/:id',
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {

    Dog.findById(req.params.id)
        .then( dog => {
            const { errors, isValid } = validateDogInput(req.body);

            if (!isValid) {
                return res.status(400).json(errors);
            }

            dog.name = req.body.name
            dog.breed = req.body.breed
            dog.dob = req.body.dob
            dog.weight = req.body.weight
            dog.energy = req.body.energy
            dog.size = req.body.size
            dog.vaccinations = req.body.vaccinations
            dog.location= req.body.location

            dog.save().then(dog => res.json(formatDog(dog)));
        })
        .catch(err =>
            res.status(404).json({ nodogfound: 'No dog found with that ID' })
        );
})

router.delete('/:id', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Dog.findByIdAndRemove(req.params.id, (err, dog) => {
          if (err) return res.status(404).json({ nodogfound: 'No dog found with that ID' })
        })

        const response = {
        message: "Dog successfully deleted",
        id: req.params.id
    };
    return res.status(200).json(response);
})


//IMAGES ROUTES
router.post('/upload', upload.single('picture'), (req, res) => {
    const img = fs.readFileSync(req.file.path);
    const encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database
    const finalImg = {
        contentType: req.file.mimetype,
        image: new Buffer(encode_image, 'base64')
    };
    Dog.collection("images").insertOne(finalImg, (err, result) => {
        console.log(result)
        if (err) return console.log(err)
        console.log('saved to database')

    })
});

module.exports = router;

// findOneAndUpdate()
// findOneAndRemove()
// findAndModify()


// COAUTHOR A COMMIT
// gcm "Test commit
// Co-authored-by: long <35038654+uwgnol1612@users.noreply.github.com>"

