import axios from 'axios';

const patchFunction = async obj => {
  const token = localStorage.getItem('token');
  const headers = { 'x-auth-token': token };

  axios
    .patch('http://localhost:8000/api/v1/users/me', obj, { headers })
    .then(res => {
      console.log(res.data.status);
    })
    .catch(err => console.log(err));
};

export default patchFunction;
