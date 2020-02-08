import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export function user(username) {
  return api.get(`/users/${username}`);
}

export default api;
