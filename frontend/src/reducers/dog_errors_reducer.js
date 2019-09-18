import { RECEIVE_DOG_ERRORS, RECEIVE_ONE_DOG } from '../actions/dog_actions'

const DogErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_DOG_ERRORS:
            return action.err;
        case RECEIVE_ONE_DOG:
            return [];
        default:
            return state
    }
}

export default DogErrorsReducer;