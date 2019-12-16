import axios from 'axios';

export const getDogs = () => {
    return axios.get('/api/dogs')
};

export const getDog = id => {
    return axios.get(`/api/dogs/${id}`)
};

export const createDog = dog => {
    return axios.post('/api/dogs', dog)
};

export const updateDog = dog => {
    return axios.patch(`/api/dogs/${dog.id}`, dog)
};

export const deleteDog = id => {
    return axios.delete(`/api/dogs/${id}`)
};


// SEARCH AXIOS REQS

export const getDogsByDogname = (dogname) => {
    return axios.get(`/api/dogs?dogname=${dogname}`);
};

export const getDogsByLocation = (location) => {
    return axios.get(`/api/dogs?location=${location}`);
};

export const getDogsByBreed = (breed) => {
    return axios.get(`/api/dogs?breed=${breed}`);
};
