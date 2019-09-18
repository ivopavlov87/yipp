import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";


export const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}


export const fetchUsers = () => dispatch => (
    UserApiUtil.getUsers().then(users => dispatch(receiveAllUsers(users)))
)