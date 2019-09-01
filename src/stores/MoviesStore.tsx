import { observable, action, computed, runInAction } from "mobx";
import Movie from '../models/Movie';
import ResponseMoviesList from '../models/ResponseMoviesList';
import moviesApi from '../services/Movies-api';

export default class MoviesStore {

    // moviesService = new MoviesService();
    api_key = '296678b2602cf4324e7f36893235c561';
    @observable listMoviesResponse = new ResponseMoviesList();
    @observable listMoviesDisplay = new Array<Movie>();
    @observable movieSelected: Movie;
    // @action
    // getTopRatedMoviesList() {
    //     this.moviesService.findTopRatedMovies()
    //         .then(response => {
    //             this.listMoviesInfo = response;
    //             console.log(this.listMoviesInfo);
    //         })
    //         .catch(error => console.log(error));
    // }

    //APENAS o nome do gênero exatamente igual, buscar por gênero, OK
    //APENAS ano buscar por ano
    //Qualquer outra string, buscar normal

    @action getTopRatedMoviesList = async () => {
        const response = await moviesApi.get(`movie/top_rated?api_key=${this.api_key}&language=pt-BR`);
        runInAction(() => {
            this.listMoviesResponse = response.data;
        })
    }
    
    @action retrieveMovieById = async (movieId: string) => {
        const response = await moviesApi.get(`movie/${movieId}?api_key=${this.api_key}&language=pt-BR`);
        runInAction(() => {
            this.movieSelected = response.data;
            console.log(this.movieSelected)
        })
    }
    
    @action searchMoviesByGenres = async (genreId: number) => {        
        const response = await moviesApi.get(`/discover/movie?api_key=${this.api_key}&language=pt-BR&sort_by=popularity.desc&page=1&with_genres=${genreId}`);
        runInAction(() => {
            this.listMoviesResponse = response.data;
        })
    } 
    
    @action searchMoviesByYear = async (year: number) => {
        const response = await moviesApi.get(`discover/movie?api_key=${this.api_key}&language=pt-BR&sort_by=popularity.desc&page=1&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31`);
        runInAction(() => {
            this.listMoviesResponse = response.data;
        })
        
    }

    @action searchMoviesByName = async (movieName: string) => {        // 
        const response = await moviesApi.get(`search/movie?api_key=${this.api_key}&language=pt-BR&query=${movieName}`);
        runInAction(() => {
            this.listMoviesResponse = response.data;
        })
    }

    @action findMovieSelectedById(id: string) {

    }

    @computed get calculateProfit(): string {
        let profit = (this.movieSelected.revenue - this.movieSelected.budget).toLocaleString()
        return `$${profit},00` ;
    }

    @computed get calculateDuration(): string {
        let hour = (this.movieSelected.runtime / 60).toPrecision(1);
        let minutes = this.movieSelected.runtime % 60;
        return `${hour}h ${minutes}min`;
    }

    @computed get formatReleaseDate(): string {
        return this.movieSelected.release_date.split('-').reverse().join('/');
    }

    @action setListMoviesDisplay() {
        //page  20 * 1  (real_page_atual) / 4 
        // let pageSize = 5;
        // let paginaASerAlterada = 4;

        // const { page, total_pages, total_results, results } = this.listMoviesResponse;
        // console.log(total_results)
        

        // let paginacao = {
        //     primeiraPag: results.slice(0, 5),
        //     segundaPag: results.slice(5, 10),
        //     terceiraPag: results.slice(10, 15),
        //     quartaPag: results.slice(15, 20),
        // }

        // console.log(paginacao)

    }

    @computed get getListMovies() {
        return this.listMoviesResponse;
    }

}

// decorate(MoviesStore, {   
//     // movies: observable,
//     listMoviesInfo: observable,
//     // getTopRatedMoviesList: action
// })