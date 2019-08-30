import { observable, action, decorate } from "mobx";
import Movie from '../models/Movie';
import ResponseMoviesList from '../models/ResponseMoviesList';
import moviesApi from './../services/movies-api';

export default class MoviesStore {
    api_key = '296678b2602cf4324e7f36893235c561';

    @observable
    listMoviesInfo = new ResponseMoviesList();

    @action
    getTopRatedMoviesList = async () => {
        const response = await moviesApi.get(`movie/top_rated?api_key=${this.api_key}&language=pt-BR`);
        this.listMoviesInfo = response.data;
    }

    @action
    retrieveMovieById = async (movieId: number) => {
        const response: ResponseMoviesList = await moviesApi.get(`movie/${movieId}?api_key=${this.api_key}&language=pt-BR`);
    }

    @action
    searchMoviesByName = async (movieName: string) => {        // 
        const response: ResponseMoviesList = await moviesApi.get(`search/movie?api_key=${this.api_key}&language=pt-BR&query=${movieName}`);
    }
    
}

// decorate(MoviesStore, {   
//     // movies: observable,
//     listMoviesInfo: observable,
//     // getTopRatedMoviesList: action
// })