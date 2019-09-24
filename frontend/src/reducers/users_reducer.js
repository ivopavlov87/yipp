import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_ALL_USERS, ADD_FAVORITE_DOG } from '../actions/user_actions';
// const userdogs = {
//   favoriteDogs: []
// };

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    // case RECEIVE_USER:
    //   debugger;
    //   return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USER:
      // debugger;
      return Object.assign({}, state, { favoriteDogs: action.user.data.favoriteDogs });
    case RECEIVE_ALL_USERS:
      return Object.assign({}, action.users.data);
    //  return action.users; // possibly change to users.data????
    //  return Object.assign({}, action.users.data); LONG VERSION OF RECEIVE_ALL_USERS
    case ADD_FAVORITE_DOG:
    // debugger;
      return Object.assign({}, state) //, state.favoriteDogs.push(action.dog) )
        // { [action.currentUser.id]: action.currentUser.favoriteDogs.push(action.data.dog) })
    default:
      return state;
  }
};

export default usersReducer;
