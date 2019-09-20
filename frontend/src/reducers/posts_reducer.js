import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  RECEIVE_USER_POSTS,
  RECEIVE_NEW_POST,
  REMOVE_POST,
  RECEIVE_DOG_POSTS
} from "../actions/post_actions";

const PostsReducer = (state = { all: {}, user: {}, dog: {}}, action) => {
// const PostsReducer = (state = { all: {}, user: {}}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
      newState.all = action.posts.data;
      return newState;
    case RECEIVE_POST:
      // return Object.assign({}, state, { [action.post.id]: action.post });
      newState.all[action.post.data.id] = action.post.data;
      return newState;
    case RECEIVE_USER_POSTS:
      newState.user = action.posts.data;
      return newState;
    case RECEIVE_DOG_POSTS:
      newState.dog = action.posts.data;
      return newState;
    case RECEIVE_NEW_POST:
      action.post.data.id = action.post.data._id
      newState.all[action.post.data.id] = action.post.data
      return newState;
    case REMOVE_POST:
      delete newState.all[action.postId];
      delete newState.user[action.postId];
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;