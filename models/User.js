const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  favoriteDogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'dogs' }]
  // followedAccounts: [],
})

module.exports = User = mongoose.model('users', UserSchema);