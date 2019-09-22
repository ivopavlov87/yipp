import axios from 'axios';

export const getPosts = () => {
  return axios.get('/api/posts')
};

export const getPost = (id) => {
  return axios.get(`/api/posts/${id}`)
};

export const getUserPosts = id => {
  return axios.get(`/api/posts/user/${id}`)
};

export const getDogPosts = id => {
  return axios.get(`/api/posts/dogs/${id}`)
};

export const writePost = data => {
  return axios.post('/api/posts/', data)
}

export const deletePost = id => {
  return axios.delete(`/api/posts/${id}`)
}

export const editPost = post => {
  return axios.patch(`/api/posts/${post.id}/edit`, post)
}