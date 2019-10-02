import {
    RECEIVE_ALL_DOGS,
    RECEIVE_ONE_DOG,
    REMOVE_ONE_DOG
} from "../actions/dog_actions";

// const PostsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
const DogsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_DOGS:
            return Object.assign({}, action.dogs.data)
        case RECEIVE_ONE_DOG:
            return Object.assign({}, state, {[action.dog.data.id]: action.dog.data});
        case REMOVE_ONE_DOG:
            let newState = Object.assign({}, state);
            delete newState[action.res.data.id];
            return newState;
        default:
            return state;
    }
};

export default DogsReducer;