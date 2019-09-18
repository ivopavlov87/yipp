import * as DogApiUtil from '../util/dog_api_util';

export const RECEIVE_ALL_DOGS = "RECEIVE_ALL_DOGS";
export const RECEIVE_ONE_DOG = "RECEIVE_ONE_DOG";
export const REMOVE_ONE_DOG = "REMOVE_ONE_DOG";
export const RECEIVE_DOG_ERRORS = "RECEIVE_DOG_ERRORS";

export const receiveAllDogs = (dogs) => ({
    type: RECEIVE_ALL_DOGS,
    dogs
})

export const receiveOneDog = (dog) => ({
    type: RECEIVE_ONE_DOG,
    dog
})

export const removeOneDog = (dogId) => ({
    type: RECEIVE_ONE_DOG,
    dogId
})

export const receiveDogErrors = (err) => ({
    type: RECEIVE_DOG_ERRORS,
    err
})



export const fetchDogs = () => dispatch => (
    DogApiUtil.getDogs()
        .then(dogs => dispatch(receiveAllDogs(dogs)))
        .catch(err => dispatch(receiveDogErrors(err)))
)


export const fetchOneDog = (id) => dispatch => (
    DogApiUtil.getDog(id)
        .then(dog => dispatch(receiveOneDog(dog)))
        .catch(err => dispatch(receiveDogErrors(err))
))



export const createDog = (dog) => dispatch => (
    DogApiUtil.createDog(dog)
        .then(dog => dispatch(receiveOneDog(dog)))
        .catch(err => dispatch(receiveDogErrors(err)))
)


export const updateDog = (dog) => (
    DogApiUtil.updateDog(dog)
        .then(dog => dispatch(receiveOneDog(dog)))
        .catch(err => dispatch(receiveDogErrors(err)))
)

export const removeOneDog = (id) => dispatch => (
    DogApiUtil.deleteDog(id)
        .then(res => dispatch(removeOneDog(res.id)))
        .catch(err => dispatch(receiveDogErrors(err))
))