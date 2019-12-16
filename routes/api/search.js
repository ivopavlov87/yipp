const express = require("express");
const router = express.Router();

const Dog = require('../../models/Dog');
const { formatDogs } = require('../../util/responseHelpers');


router.get('/breeds/:breed', (req, res) => {
    let searchStr = req.param.breed
    let queryStr = searchStr.charAt(0).toUpperCase() + searchStr.slice(1)

    Dog.find({ breed: `.*${queryStr}.*` })
        .then(dogs => res.json(formatDogs(dogs)))
        .catch(err => {
            console.log(err)
            // return res.status(404).json({ nodogsfound: 'No dogs found with that breed' }
        })
});


router.get('/dognames/:dogname', (req, res) => {
    let searchStr = req.params.dogname
    let queryStr = searchStr.charAt(0).toUpperCase() + searchStr.slice(1)

    Dog.find({ name: req.params.dogname })
        .then(dogs => res.json(formatDogs(dogs)))
        .catch(err =>
            res.status(404).json({ nodogsfound: 'No dogs found with that name' }
            )
        );
});


router.get('/locations/:location', (req, res) => {
    let searchStr = req.params.location
    let queryStr = searchStr.charAt(0).toUpperCase() + searchStr.slice(1)

    Dog.find({ location: `.*${queryStr}.*` })
        .then(dogs => res.json(formatDogs(dogs)))
        .catch(err =>
            res.status(404).json({ nodogsfound: 'No dogs found from that location' }
            )
        );
});


module.exports = router;