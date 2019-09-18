const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  temperamentRating: {
    type: Number,
    min: 1, // 1 is very aggressive
    max: 10, // 10 is super friendly
    required: true
  },
  dog: {
    type: Schema.Types.ObjectId,
    ref: 'dogs'
  }
});

module.exports = Post = mongoose.model('post', PostSchema);