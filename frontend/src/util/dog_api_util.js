import axios from 'axios';

export const getDogs = () => {
    return axios.get('/api/dogs')
};

// export const getUserDogs = id => {
//     return axios.get(`/api/dogs/user/${id}`)
// };

export const getDog = id => {
    return axios.get(`/api/dogs/${id}`)
}

export const createDog = dog => {
    return axios.post('/api/dogs', dog)
}

export const updateDog = dog => {
    return axios.patch(`/api/dogs/${dog.id}`, dog)
}

export const deleteDog = id => {
    return axios.delete(`/api/dogs/${id}`)
}