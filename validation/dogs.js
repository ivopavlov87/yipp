const Validator = require('validator');
const validText = require('./valid-text');
const validNum = require('./valid-number')

module.exports = function validateDogInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.breed = validText(data.breed) ? data.breed : '';
    data.age = validNum(data.age) ? data.age : '';
    data.weight = validText(data.weight) ? data.weight : '';
    data.size = validText(data.size) ? data.size : '';

    data.energy = validNum(data.energy) ? data.energy : '';
    

    // CHECK FOR EMPTY FIELDS
    if (Validator.isEmpty(data.name)) {
        errors.text = 'Name field is required';
    }
    if (Validator.isEmpty(data.breed)) {
        errors.text = 'Breed field is required';
    }
    if (Validator.isEmpty(data.age)) {
        errors.text = 'Age field is required';
    }
    if (Validator.isEmpty(data.weight)) {
        errors.text = 'Weight field is required';
    }
    if (Validator.isEmpty(data.energy)) {
        errors.text = 'Energy field is required';
    }
    if (Validator.isEmpty(data.temperament)) {
        errors.text = 'Temperament field is required';
    }


    // VALIDATE BETWEENS
    if (!Validator.isLength(data.name, { min: 1, max: 140 })) {
        errors.text = 'Dog name must be between 1 and 140 characters';
    }
    if (!Validator.isLength(data.energy, { min: 0, max: 10 })) {
        errors.text = 'Dog energy must be between levels 0 and 10';
    }
    if (!Validator.isLength(data.temperament, { min: 0, max: 10 })) {
        errors.text = 'Dog temperament must be between levels 0 and 10';
    }
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};