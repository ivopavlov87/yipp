const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const mongoose = require('mongoose');
const passport = require('passport');

const Dog = require('../../models/Dog');
const validateDogInput = require('../../validation/dogs');


router.get('/', (req, res) => {
    Dog.find()
        .sort({ date: -1 })
        .then(dogs => res.json(dogs))
        // ANDY NOTES
        // instead of res.json(posts) -> (utilHelperFunc.post) to standardize backend response
        .catch(err => res.status(404).json({ nodogsfound: 'No dogs found' }));
});

router.get('/user/:user_id', (req, res) => {
    Dog.find({ user: req.params.user_id })
        .sort({ date: -1 })
        .then(dogs => res.json(dogs))
        .catch(err =>
            res.status(404).json({ nodogsfound: 'No dogs found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Dog.findById(req.params.id)
        .then(dog => res.json(dog))
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
            user: req.user.id,
            name: req.body.name,
            breed: req.body.breed,
            dob: req.body.dob,
            weight: req.body.weight,
            energy: req.body.energy,
            size: req.body.size,
            vaccinations: req.body.vaccinations,
            temperament: req.body.temperament,
            ratings: req.body.ratings,
        });

        newDog.save().then(dog => res.json(dog));
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
            Dog.update(dog, {
                name: req.body.name,
                breed: req.body.breed,
                dob: req.body.dob,
                weight: req.body.weight,
                energy: req.body.energy,
                size: req.body.size,
                vaccinations: req.body.vaccinations,
                temperament: req.body.temperament,
                ratings: req.body.ratings,
            })

            dog.save().then(dog => res.json(dog));
        })
        .catch(err =>
            res.status(404).json({ nodogfound: 'No dog found with that ID' })
        );
})

router.delete('/:id', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Dog.findById(req.params.id)
        .then(dog => {
            Dog.deleteOne({id: dog.id})
        })
        .catch(err =>
            res.status(404).json({ nodogfound: 'No dog found with that ID' })
        );
})

module.exports = router;

findOneAndUpdate()
findOneAndRemove()
findAndModify()