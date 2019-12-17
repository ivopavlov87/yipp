const Validator = require('validator');
const validText = require('./valid-text');
const validNum = require('./valid-number')

module.exports = function validateDogInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.breed = validText(data.breed) ? data.breed : '';
    data.dob = validText(data.dob) ? data.dob : '';
    data.weight = validText(data.weight) ? data.weight : '';


    // dob is a string we will parse for age energy will be radio buttons
    // vaccinations will be a boolean, checkbox
    // size will be a dropdown, small/med/large
    

    // CHECK FOR EMPTY FIELDS
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Dog name is required';
    }
    if (Validator.isEmpty(data.breed)) {
        errors.breed = 'Dog breed is required';
    }
    if (Validator.isEmpty(data.dob)) {
        errors.dob = 'Dog date of birth is required';
    }
    if (Validator.isEmpty(data.weight)) {
        errors.weight = 'Dog weight is required';
    }


    // VALIDATE BETWEENS
    if (!Validator.isLength(data.name, { min: 1, max: 20})) {
        errors.name = 'Dog name must be between 1 and 20 characters';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};