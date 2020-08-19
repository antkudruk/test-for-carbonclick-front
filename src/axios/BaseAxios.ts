import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8081',
});

instance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
instance.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
instance.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, PATCH, OPTIONS';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
instance.defaults.headers.common['Origin'] = 'http://localhost:3000';
instance.defaults.headers.common['Referer'] = 'http://localhost:3000/';


export default instance;