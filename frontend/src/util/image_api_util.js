import axios from 'axios';

export const getImages = () => {
    return axios.get('/api/images')
};


export const uploadImage = imageObj => {
    return axios.post('/api/images', imageObj)
}
