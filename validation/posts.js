const Validator = require('validator');
const validText = require('./valid-text');
const validRate = require('./valid-rate');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';
  data.tempermentRating = validRate(data.tempermentRating) ? data.tempermentRating : '';

  if (!Validator.isLength(data.text, { min: 3, max: 500 })) {
    errors.text = 'Post must be between 3 and 500 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  if (Validator.isEmpty(data.tempermentRating)) {
    errors.text = 'Temperment rating is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};