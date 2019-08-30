import Movie from './Movie';

export default class ResponseMoviesList {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}