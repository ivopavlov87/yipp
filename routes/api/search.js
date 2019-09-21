const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const mongoose = require('mongoose');

const Dog = require('../../models/Dog');
const User = require('../../models/User')
const { formatDogs, formatDog } = require('../../util/responseHelpers');


// router.get('/dogs/:username', (req, res) => {
//     let username;
//     User.find({username: req.params.username})
//     .then(user => {
//         const userId = user._id
//     })
//     // Dog.findById(req.params.id)
//     Dog.find({ user: userId })
//         .then(dogs => res.json(dogs))
//         .catch(err =>
//             res.status(404).json({ nodogsfound: 'No dogs found from that user' }
//             )
//         );
// });

router.get('/users/:username', (req, res) => {
    User.findOne({ username: req.params.username })
        .then(users => res.json(users))
        .catch(err =>
            res.status(404).json({ nousersfound: 'No users found with that name' }
            )
        );
});


router.get('/dogs/:dogname', (req, res) => {
    Dog.find({ name: req.params.dogname })
        .then(dogs => res.json(dogs))
        .catch(err =>
            res.status(404).json({ nodogsfound: 'No dogs found with that name' }
            )
        );
});


router.get('/dogs/:location', (req, res) => {
    Dog.find({ location: req.params.location })
        .then(dogs => res.json(dogs))
        .catch(err =>
            res.status(404).json({ nodogsfound: 'No dogs found from that location' }
            )
        );
});