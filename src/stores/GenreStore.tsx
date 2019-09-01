import { observable, action, runInAction } from "mobx";
import Genre from "../models/Genre";
import moviesApi from "../services/Movies-api";

export default class GenreStore {

    api_key = '296678b2602cf4324e7f36893235c561';

    @observable genres: Genre[];

    @action getGenres = async () => {
        const response = await moviesApi.get('genre/movie/list?api_key=296678b2602cf4324e7f36893235c561&language=pt-BR');
        runInAction(() => {
            this.genres = response.data.genres;
        })
    }

}