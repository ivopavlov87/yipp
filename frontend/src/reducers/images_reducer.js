import {
    RECEIVE_ALL_IMAGES
} from '../actions/image_actions';

export const ImagesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_IMAGES:
            return Object.assign({}, action.images.data)
        default:
            return state;
    }
}

export default ImagesReducer;