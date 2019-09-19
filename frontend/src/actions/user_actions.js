import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";

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

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.getUsers().then(users => dispatch(receiveUsers(users)));
};

export const fetchUser = (id) => dispatch => {
  return UserAPIUtil.getUser(id).then(user => dispatch(receiveUser(user)));
}

export const createUser = (formData) => dispatch => {
  return UserAPIUtil.createUser(formData).then(user => dispatch(updateUser(user)));
}

// window.fetchUser = fetchUser;