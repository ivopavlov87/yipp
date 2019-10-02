const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const mongoose = require('mongoose');

const Dog = require('../../models/Dog');
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

// router.get('/users/:username', (req, res) => {
//     User.findOne({ username: req.params.username })
//         .then(users => res.json(users))
//         .catch(err =>
//             res.status(404).json({ nousersfound: 'No users found with that name' }
//             )
//         );
// });

router.get('/breeds/:breed', (req, res) => {
    Dog.find({ breed: req.params.breed })
        .then(dogs => res.json(formatDogs(dogs)))
        .catch(err =>
            res.status(404).json({ nodogsfound: 'No dogs found with that breed' }
            )
        );
});



router.get('/dognames/:dogname', (req, res) => {

    Dog.find({ name: req.params.dogname })
        .then(dogs => res.json(formatDogs(dogs)))
        .catch(err =>
            res.status(404).json({ nodogsfound: 'No dogs found with that name' }
            )
        );
});


router.get('/locations/:location', (req, res) => {
    // let searchStr
    // if (req.params.location.includes('%20')) {
    //     searchStr = req.params.location.replace('%20', ' ')
    // }

    Dog.find({ location: req.params.location })
        .then(dogs => res.json(formatDogs(dogs)))
        .catch(err =>
            res.status(404).json({ nodogsfound: 'No dogs found from that location' }
            )
        );
});


module.exports = router;