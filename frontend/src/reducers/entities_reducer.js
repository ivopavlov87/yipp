import { combineReducers } from 'redux';

import PostsReducer from './posts_reducer'
import DogsReducer from './dogs_reducer'
import UsersReducer from './user_reducer'

const EntitiesReducer = combineReducers({
    posts: PostsReducer,
    dogs: DogsReducer,
    users: UsersReducer

});

export default EntitiesReducer;