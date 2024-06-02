import axios from 'axios';

const token = localStorage.getItem('token');

export default axios.create({
  baseURL: `http://localhost:8000/api/v1`,
  headers: { 'x-auth-token': token },
});

// export { CanceledError };