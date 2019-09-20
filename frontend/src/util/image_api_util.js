import axios from 'axios';

export const getImages = () => {
    return axios.get('/api/images')
};