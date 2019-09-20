const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const mongoose = require('mongoose');

const Dog = require('../../models/Dog');

const { formatDogs, formatDog } = require('../../util/responseHelpers');


router.get('/dogs/:userId', (req, res) => {
    Dog.find({ user: req.params.userId })
        .then(dogs => res.json(dogs))
        .catch(err =>
            res.status(404).json({ nodogsfound: 'No dogs found from that user' }
            )
        );
});


router.get('/dogs/:dogname', (req, res) => {
    Dog.find({ user: req.params.userId })
        .sort({ date: -1 })
        .then(dogs => res.json(dogs))
        .catch(err =>
            res.status(404).json({ nodogsfound: 'No dogs found from that user' }
            )
        );
});