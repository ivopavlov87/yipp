import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const ADD_FAVORITE_DOG = "ADD_FAVORITE_DOG"


const receiveUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const updateUser = user => ({
  type: UPDATE_USER,
  user
});

const addFavoriteDog = dog => ({
  type: ADD_FAVORITE_DOG,
  dog
}) 

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.getUsers().then(users => dispatch(receiveUsers(users))).catch(err => console.log(err));
};

export const fetchUser = (id) => dispatch => {
  return UserAPIUtil.getUser(id).then(user => dispatch(receiveUser(user))).catch(err => console.log(err));
}

export const createUser = (formData) => dispatch => {
  return UserAPIUtil.createUser(formData).then(user => dispatch(updateUser(user))).catch(err => console.log(err));
}

export const createFavorite = (id) => dispatch => {
 return UserAPIUtil.addFavorite(id).then(user => dispatch(addFavoriteDog(id))).catch(err => console.log(err));
}

// SEARCH USER ACTIONS

// export const fetchUserByUsername = (username) => dispatch => {
//   return UserAPIUtil.getUserByUsername(username)
//     .then(user => dispatch(receiveUsers(user)))
//     .catch(err => console.log(err));
// }

