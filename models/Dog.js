const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  energy: {
    type: Number,
    required: true
  },
  vaccinations: {
    type: Boolean,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  gender: {
    type: String,
    required: true
  }
});



module.exports = Dog = mongoose.model('dog', DogSchema);