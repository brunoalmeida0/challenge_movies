import { observable, action, computed, runInAction } from "mobx";
import Movie from '../models/Movie';
import ResponseMoviesList from '../models/ResponseMoviesList';
import MovieApi from '../services/MovieApi';
import Trailer from "../models/Trailer";
import ResponseTrailer from "../models/ResponseTrailer";

export default class MoviesStore {

    api_key: string = '296678b2602cf4324e7f36893235c561';
    movieApi = new MovieApi();
    @observable listMoviesResponse = new ResponseMoviesList();
    @observable listMoviesDisplay = new Array<Movie>();
    @observable movieSelected: Movie;
    @observable lastRequest: Function;
    @observable yearSearch: number;
    @observable genreIdSearch: number;
    @observable nameSearch: string;
    @observable displayPage: number = 1;
    @observable trailers: ResponseTrailer;

    @action getTopRatedMoviesList = async (page: number) => {
        const response = await this.movieApi.get(`movie/top_rated?api_key=${this.api_key}&language=pt-BR&page=${page}`);
        runInAction(() => {
            this.listMoviesResponse = response.data;
            this.lastRequest = this.getTopRatedMoviesList;
            if (page === 1) {
                this.listMoviesDisplay = this.listMoviesResponse.results.slice(0, 5);
            }
        })
    }

    @action retrieveMovieById = async (movieId: string) => {
        const response = await this.movieApi.get(`movie/${movieId}?api_key=${this.api_key}&language=pt-BR`);
        runInAction(() => {
            this.movieSelected = response.data;
        })
    }

    @action searchMoviesByGenres = async (page: number) => {
        const response = await this.movieApi.get(`/discover/movie?api_key=${this.api_key}&language=pt-BR&sort_by=popularity.desc&page=1&with_genres=${this.genreIdSearch}`);
        runInAction(() => {
            this.listMoviesResponse = response.data;
            this.lastRequest = this.searchMoviesByGenres;
            if (page === 1) {
                this.listMoviesDisplay = this.listMoviesResponse.results.slice(0, 5);
            }
        })
    }

    @action searchMoviesByYear = async (page: number) => {
        const response = await this.movieApi.get(`discover/movie?api_key=${this.api_key}&language=pt-BR&sort_by=popularity.desc&page=1&primary_release_date.gte=${this.yearSearch}-01-01&primary_release_date.lte=${this.yearSearch}-12-31&page=${page}`);
        runInAction(() => {
            this.listMoviesResponse = response.data;
            this.lastRequest = this.searchMoviesByYear;
            if (page === 1) {
                this.listMoviesDisplay = this.listMoviesResponse.results.slice(0, 5);
            }
        })

    }

    @action searchMoviesByName = async (movieName: string, page: number) => {        
        const response = await this.movieApi.get(`search/movie?api_key=${this.api_key}&language=pt-BR&query=${movieName}`);
        runInAction(() => {
            this.listMoviesResponse = response.data;
            this.lastRequest = this.searchMoviesByName;
            if (page === 1) {
                this.listMoviesDisplay = this.listMoviesResponse.results.slice(0, 5);
            }
        })
    }

    @action getTrailerByMovieId = async (movieId: string) => {        
        const response = await this.movieApi.get(`movie/${movieId}/videos?api_key=${this.api_key}&language=en-US`);
        runInAction(() => {
            this.trailers = response.data;
        })
    }

    @action setMoviesDisplay(movies?: any[]) {
        if (movies === undefined) {
            this.listMoviesDisplay = this.listMoviesResponse.results;
        } else {
            this.listMoviesDisplay = movies;
        }
    }

    @action setYearSearch = (year: number) => {
        this.yearSearch = year;
    }

    @action setGenreIdSearch = (genreId: number) => {
        this.genreIdSearch = genreId;
    }

    @action setNameSearch = (name: string) => {
        this.nameSearch = name;
    }

    @computed get calculateProfit(): string {
        if(this.movieSelected.revenue === null || this.movieSelected.revenue === undefined) {
            return '-';
        }
        let profit = (this.movieSelected.revenue - this.movieSelected.budget).toLocaleString()
        return `$${profit},00`;
    }

    @computed get calculateDuration(): string {
        if(this.movieSelected.runtime === null || this.movieSelected.runtime === undefined) return '-';
        let hour = (this.movieSelected.runtime / 60).toPrecision(1);
        let minutes = this.movieSelected.runtime % 60;
        return `${hour}h ${minutes}min`;
        
    }

    @computed get formatReleaseDate(): string {
        if(this.movieSelected.release_date === null || this.movieSelected.release_date === undefined) return '-';
        return this.movieSelected.release_date.split('-').reverse().join('/');
    }

}