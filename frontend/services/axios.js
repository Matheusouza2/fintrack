import axios from 'axios';

const instance = axios.create({
    baseURL: '127.0.0.0:9090/api/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
      },
  });

export const post = async (endpoint, body) => {
    try {
        const response = await instance.post('/transferencia', {});
        console.log(response)
      } catch (err) {
        console.error(err);
      }
}

