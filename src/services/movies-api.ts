import axios from 'axios';

const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default moviesApi;