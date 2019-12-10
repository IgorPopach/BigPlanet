import axios from 'axios';

const request = axios.create({
    timeout: 20000,
    responseType: 'json',
});

export default request;
