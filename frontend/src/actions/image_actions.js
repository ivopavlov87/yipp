import { getImages, uploadImage } from '../util/image_api_util';

export const RECEIVE_ALL_IMAGES = "RECEIVE_ALL_IMAGES";

export const receiveAllImages = (images) => ({
    type: RECEIVE_ALL_IMAGES,
    images
})

export const fetchAllImages = () => dispatch => {
    getImages().then(images => dispatch(receiveAllImages(images)))
}

export const createImage = (imgObj) => dispatch => {
    uploadImage(imgObj).then(() => dispatch(fetchAllImages()))
}


