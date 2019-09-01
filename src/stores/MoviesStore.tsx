import { observable, action, computed, runInAction } from "mobx";
import Movie from '../models/Movie';
import ResponseMoviesList from '../models/ResponseMoviesList';
import moviesApi from '../services/Movies-api';

export default class MoviesStore {

    api_key = '296678b2602cf4324e7f36893235c561';
    @observable listMoviesResponse = new ResponseMoviesList();
    @observable listMoviesDisplay = new Array<Movie>();
    @observable movieSelected: Movie;

    @observable lastRequest: Function;

    @observable displayPage: number = 1;

    @action getTopRatedMoviesList = async (page: number) => {
        const response = await moviesApi.get(`movie/top_rated?api_key=${this.api_key}&language=pt-BR&page=${page}`);
        runInAction(() => {
            this.listMoviesResponse = response.data;
            this.lastRequest = this.getTopRatedMoviesList;
            if(page === 1) {
                this.listMoviesDisplay = this.listMoviesResponse.results.slice(0, 5);
            }
        })
    }

    @action retrieveMovieById = async (movieId: string) => {
        const response = await moviesApi.get(`movie/${movieId}?api_key=${this.api_key}&language=pt-BR`);
        runInAction(() => {
            this.movieSelected = response.data;
            console.log(this.movieSelected)
        })
    }

    @action searchMoviesByGenres = async (genreId: number, page: number) => {
        const response = await moviesApi.get(`/discover/movie?api_key=${this.api_key}&language=pt-BR&sort_by=popularity.desc&page=1&with_genres=${genreId}`);
        runInAction(() => {
            this.listMoviesResponse = response.data;
            this.lastRequest = this.searchMoviesByYear;
            if(page === 1) {
                this.listMoviesDisplay = this.listMoviesResponse.results.slice(0, 5);
            }
        })
    }

    @action searchMoviesByYear = async (year: number, page: number) => {
        console.log('searchMoviesByYear')
        const response = await moviesApi.get(`discover/movie?api_key=${this.api_key}&language=pt-BR&sort_by=popularity.desc&page=1&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31`);
        runInAction(() => {
            this.listMoviesResponse = response.data;
            this.lastRequest = this.searchMoviesByYear;
            if(page === 1) {
                this.listMoviesDisplay = this.listMoviesResponse.results.slice(0, 5);
            }
        })

    }

    @action searchMoviesByName = async (movieName: string, page: number) => {        // 
        const response = await moviesApi.get(`search/movie?api_key=${this.api_key}&language=pt-BR&query=${movieName}`);
        runInAction(() => {
            this.listMoviesResponse = response.data;
            this.lastRequest = this.searchMoviesByYear;
            if(page === 1) {
                this.listMoviesDisplay = this.listMoviesResponse.results.slice(0, 5);
            }
        })
    }

    @action setMoviesDisplay(movies?: any[]) {
        if (movies === undefined) {
            this.listMoviesDisplay = this.listMoviesResponse.results;
        } else {
            this.listMoviesDisplay = movies;
        }
    }


    @action async setPagination(lastRealPage: number, page: number) {
        let realPage = Math.ceil(page / 4);
        if (lastRealPage !== realPage) {
            await this.lastRequest(realPage);
            this.setMoviesDisplay();
            lastRealPage = realPage;
        } else {

            let numero = page / 4;
            let aux = Math.floor(numero);
            let resto = numero - aux;

            if (resto === 0.25) {
                this.listMoviesDisplay = this.listMoviesResponse.results.slice(0, 5);
            } else if (resto === 0.5) {
                this.listMoviesDisplay = this.listMoviesResponse.results.slice(5, 10);
            } else if (resto === 0.75) {
                this.listMoviesDisplay = this.listMoviesResponse.results.slice(10, 15);
            } else if (resto === 0) {
                this.listMoviesDisplay = this.listMoviesResponse.results.slice(15, 20);
            }
        }

    }

    @computed get calculateProfit(): string {
        let profit = (this.movieSelected.revenue - this.movieSelected.budget).toLocaleString()
        return `$${profit},00`;
    }

    @computed get calculateDuration(): string {
        let hour = (this.movieSelected.runtime / 60).toPrecision(1);
        let minutes = this.movieSelected.runtime % 60;
        return `${hour}h ${minutes}min`;
    }

    @computed get formatReleaseDate(): string {
        return this.movieSelected.release_date.split('-').reverse().join('/');
    }

    @computed get getListMovies() {
        return this.listMoviesResponse;
    }

}