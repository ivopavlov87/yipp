import { combineReducers } from 'redux';

import PostsReducer from './posts_reducer'
import DogsReducer from './dogs_reducer'
import UserReducer from './users_reducer'
import ImagesReducer from './images_reducer';

const EntitiesReducer = combineReducers({
    posts: PostsReducer,
    dogs: DogsReducer,
    users: UserReducer,
    images: ImagesReducer,

});

export default EntitiesReducer;