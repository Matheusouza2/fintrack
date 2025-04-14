import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:9090/api/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
      },
  });

export const post = async (endpoint, body) => {
    try {
        const response = await instance.post(endpoint, body);
        console.log(response)
      } catch (err) {
        console.error(err);
      }
}

