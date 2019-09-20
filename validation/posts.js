const Validator = require('validator');
const validText = require('./valid-text');
const validRate = require('./valid-rate');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';
  // data.authorName = validText(data.authorName) ? data.authorName : '';
  
  data.temperamentRating = validRate(parseInt(data.temperamentRating)) ? data.temperamentRating : '';

  if (!Validator.isLength(data.text, { min: 3, max: 500 })) {
    errors.text = 'Post must be between 3 and 500 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  if (Validator.isEmpty(data.temperamentRating.toString())) {
    errors.text = 'Temperament rating is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};