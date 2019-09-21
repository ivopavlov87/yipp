const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: true,
    unique: true
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
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }]
  // followedAccounts: [],
})

module.exports = User = mongoose.model('users', UserSchema);