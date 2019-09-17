const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
  name: {
    type: String,
    required: true
  },

});



module.exports = Dog = mongoose.model('dogs', DogSchema);