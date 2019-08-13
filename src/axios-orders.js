import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-dd079.firebaseio.com/'
});

export default instance;