import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-81f38.firebaseio.com/'
});

export default instance;