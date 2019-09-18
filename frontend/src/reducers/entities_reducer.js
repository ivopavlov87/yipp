import { combineReducers } from 'redux';

import PostsReducer from './posts_reducer'
import DogsReducer from './dogs_reducer'

const EntitiesReducer = combineReducers({
    posts: PostsReducer,
    dogs: DogsReducer
});

export default EntitiesReducer;