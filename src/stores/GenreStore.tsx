import { observable, action, runInAction } from "mobx";
import Genre from "../models/Genre";
import MovieApi from '../services/MovieApi';

export default class GenreStore {

    private movieApi: MovieApi;
    constructor() {
        this.movieApi = new MovieApi();
    }
    
    api_key = '296678b2602cf4324e7f36893235c561';

    @observable genres: Genre[];

    @action getGenres = async () => {
        const response = await this.movieApi.get('genre/movie/list?api_key=296678b2602cf4324e7f36893235c561&language=pt-BR');
        runInAction(() => {
            this.genres = response.data.genres;
        })
    }

}