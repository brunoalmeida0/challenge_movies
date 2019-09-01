import axios from 'axios';

// export default class MoviesService {

//     api_key = '296678b2602cf4324e7f36893235c561';
//     baseURL = "https://api.themoviedb.org/3/";

//     public findTopRatedMovies(): Promise<ResponseMoviesList> {
//         let url = this.baseURL + `movie/top_rated?api_key=${this.api_key}&language=pt-BR`;
//         return axios.get(url);
//     }
// }
const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default moviesApi; 