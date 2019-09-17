const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const { formatPosts, formatPost } = require('../../util/responseHelpers')

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/posts');

// This is for all posts
router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(formatPosts(posts))) 
      // ANDY NOTES
      // instead of res.json(posts) -> (utilHelperFunc.post) to standardize backend response
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

// This is for all of 1 users posts
router.get('/user/:user_id', (req, res) => {
  Post.find({ user: req.params.user_id })
    .sort({ date: -1 })
    .then(posts => res.json(formatPosts(posts)))
    .catch(err =>
      res.status(404).json({ nopostsfound: 'No posts found from that user' }
      )
    );
});

// router.get('/:id', (req, res) => {
//   Post.findById(req.params.id)
//     .then(post => res.json(formatPost(post)))
//     .catch(err =>
//       res.status(404).json({ nopostfound: 'No post found with that ID' })
//     );
// });

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      user: req.user.id,
      tempermentRating: req.body.tempermentRating
    });

    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;