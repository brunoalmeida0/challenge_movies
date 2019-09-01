import React, { Component } from 'react';

import './styles.scss';
import { inject, observer } from 'mobx-react';
import MoviesStore from './../../stores/MoviesStore';
import GenreStore from '../../stores/GenreStore';

@inject('moviesStore', 'genresStore')
@observer
export default class SearchInput extends Component<{ moviesStore?: MoviesStore, genresStore?: GenreStore }> {

    findGenres = async (search: string) => {
        const { genresStore } = this.props;
        const { moviesStore } = this.props;

        await genresStore!.getGenres();
        let searchGenre = genresStore!.genres.filter(genre => genre.name.toLowerCase() === search.toLowerCase());
        if (searchGenre.length > 0) {
            moviesStore!.searchMoviesByGenres(searchGenre[0].id, 1);
            return true;
        }
        return false;
    }

    findYear = (search: string) => {
        console.log('findYear' + search)
        const { moviesStore } = this.props;
        if (search.match(/\d+/g)) {
            let searchYearNumber = parseInt(search);
            if (searchYearNumber > 999 && searchYearNumber <= 9999) {
                moviesStore!.searchMoviesByYear(searchYearNumber, 1);
                return true;
            }
        }
        return false;
    }
    
    findByName = (search: string) => {
        const { moviesStore } = this.props;
        moviesStore!.searchMoviesByName(search, 1);
    }

    search = async (event: any) => {
        if (event.key === 'Enter') {
            let value = event.target.value;
            if(this.findYear(value)) {
                return;
            } else if(await this.findGenres(value)){
                return;
            } else {
                this.findByName(value);
            }            
        }
    }

    render() {
        return (
            <input placeholder="Busque um filme por nome, ano ou gênero..." onKeyDown={this.search} className="search-input" type="text" />
        )
    }

}