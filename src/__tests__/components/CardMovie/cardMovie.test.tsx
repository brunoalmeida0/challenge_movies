import React from 'react';
import { shallow, mount  } from 'enzyme';
import CardMovie from './../../../components/CardMovie';
import Movie from './../../../models/Movie';

describe('CardMovieComponent', () => {
    it('Deve criar o CardMovieComponent sem erros', () => {
        let movie = new Movie();
        movie.poster_path = 'path_para_teste';
        movie.vote_average = 2.5;
        movie.title = 'title para teste';
        movie.overview = 'overview para teste';
        movie.genre_ids = [1, 2, 3];
        movie.id = 1
        movie.release_date = '1999-09-10'

        const wrapper = shallow(<CardMovie movie={movie}/>);
        expect(wrapper.find('.movie-poster')).not.toBeNull();
        expect(wrapper.find('.movie-poster').prop('src')).toBe('https://image.tmdb.org/t/p/w200' + movie.poster_path);
        expect(wrapper.find('.linkToDetails').containsMatchingElement(<h1 className="movie-title">{movie.title}</h1>)).toBeTruthy();
        expect(wrapper.find('.movie-release').text()).toBe(movie.release_date.split('-').reverse().join('/'));
        expect(wrapper.find('.movie-overview').text()).toBe(movie.overview);
    })

    it('Deve criar o CardMovieComponent sem erros mas sem overview', () => {
        let movie = new Movie();
        movie.poster_path = 'path_para_teste';
        movie.vote_average = 2.5;
        movie.title = 'title para teste';
        movie.overview = '';
        movie.genre_ids = [1, 2, 3];
        movie.id = 1
        movie.release_date = '1999-09-10'

        const wrapper = shallow(<CardMovie movie={movie}/>);
        expect(wrapper.find('.movie-poster')).not.toBeNull();
        expect(wrapper.find('.movie-poster').prop('src')).toBe('https://image.tmdb.org/t/p/w200' + movie.poster_path);
        expect(wrapper.find('.linkToDetails').containsMatchingElement(<h1 className="movie-title">{movie.title}</h1>)).toBeTruthy();
        expect(wrapper.find('.movie-release').text()).toBe(movie.release_date.split('-').reverse().join('/'));
        expect(wrapper.find('.movie-overview').text()).toBe('Não há sinopse para este filme.');
    })

});