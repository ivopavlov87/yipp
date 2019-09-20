import { getPosts, getUserPosts, writePost, deletePost, getPost, editPost, getDogPosts } from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_DOG_POSTS = "RECEIVE_DOG_POSTS"

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receiveUserPosts = posts => ({
  type: RECEIVE_USER_POSTS,
  posts
});

export const receiveDogPosts = posts => ({
  type: RECEIVE_DOG_POSTS,
  posts
})

export const receiveNewPost = post => ({
  type: RECEIVE_NEW_POST,
  post
});

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
})

export const fetchPosts = () => dispatch => (
  getPosts()
    .then(posts => {
      // debugger;
      dispatch(receivePosts(posts))
    })
    .catch(err => console.log(err))
);

export const fetchPost = (id) => (dispatch) => {
  return getPost(id).then((post) => dispatch(receivePost(post)));
};

export const fetchUserPosts = id => dispatch => (
  getUserPosts(id)
    .then(posts => dispatch(receiveUserPosts(posts)))
    .catch(err => console.log(err))
);

export const fetchDogPosts = id => dispatch => (
  getDogPosts(id)
    .then(posts => dispatch(receiveDogPosts(posts)))
    .catch(err => console.log(err))
);

export const composePost = data => dispatch => {
  return writePost(data)
      .then(post => dispatch(receiveNewPost(post)))
      .catch(err => console.log(err))
};

export const destroyPost = postId => dispatch => {
  return deletePost(postId)
  .then((post) => dispatch(removePost(postId)))
}

export const updatePost = post => dispatch => {
  return editPost(post)
  .then(post => dispatch(receivePost(post)))
    .catch(err => {
      // debugger;
      console.log(err)
    })
  // type: RECEIVE_POST,
  // post
};