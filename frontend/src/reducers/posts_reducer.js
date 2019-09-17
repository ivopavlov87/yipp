import {
  RECEIVE_POSTS,
  RECEIVE_USER_POSTS,
  RECEIVE_NEW_POST
} from "../actions/post_actions";

// const PostsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
const PostsReducer = (state = { all: {}, user: {}}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
      newState.all = action.posts.data;
      return newState;
    case RECEIVE_USER_POSTS:
      newState.user = action.posts.data;
      return newState;
    case RECEIVE_NEW_POST:
      // newState.new = action.post.data
      // return Object.assign({}, newState.user, action.post.data)
      debugger;
      // return newState;
    default:
      return state;
  }
};

export default PostsReducer;