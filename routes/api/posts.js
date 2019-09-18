const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const { formatPosts, formatPost } = require('../../util/responseHelpers')
const {
  confirmOwner
} = require("../../util/ownershipHelper");
const User = require('../../models/User');

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

// This is for all post of 1 user
router.get('/user/:user_id', (req, res) => {
  Post.find({ user: req.params.user_id })
    .sort({ date: -1 })
    .then(posts => res.json(formatPosts(posts)))
    .catch(err =>
      res.status(404).json({ nopostsfound: 'No posts found from that user' }
      )
    );
});

router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(formatPost(post)))
    .catch(err =>
      res.status(404).json({ nopostfound: 'No post found with that ID' })
    );
});

// CREATE POST
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
      // authorName: req.user.username,
      temperamentRating: req.body.temperamentRating
    });

    newPost.save().then(post => res.json(post));
  }
);


// if (!confirmOwner(store, req.user)) {
//   return res.status(400).json({
//     errors: [{ detail: "You must have created this store to edit it!" }]
//   });
// }

// EDIT POST
router.patch('/:postId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
//     const { errors, isValid } = validatePostInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

    // if (post.user.toString() !== req.user.id) {
    //   return res.status(401).json({msg: 'User not authorized'});
    // }

    // Store.findOne({ _id: req.params.id })
    //   .then(store => {
    
//     if (!confirmOwner(post, req.user)) {
//       return res.status(400).json({
//         errors: [{ detail: "You must have created this post to edit it!" }]
//       });
//     }
    

//     const newPost = new Post({
//       text: req.body.text,
//       user: req.user.id,
//       authorName: req.user.name,
//       temperamentRating: req.body.temperamentRating
//     });

//     newPost.save().then(post => res.json(post));
  }
);

//DELETE POST
router.delete('/:postId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

      Post.findById(req.params.postId).then((post) => {

        
        if (!post) {
          return res.status(404).json({msg: 'Post not found'});
        }
        // const userTest = User.find(post.user)
        User.find(post.user).then((user) => {
          if (!confirmOwner(req.user, user)) {
            return res.status(400).json({ detail: "You must have created this post to delete it!" })
          }
          
          post.remove().then(() => {
            res.json({ msg: 'Post removed' })
          })
        }).catch(err => {
          res.json(err)
        })
        
        }).catch((err) => {
          console.error(err.message);
          if (err.kind === 'ObjectId') {
            return res.status(404).json({msg: 'Post not found'});
          }
        res.status(500).send('Server Error');
      })
    });


module.exports = router;