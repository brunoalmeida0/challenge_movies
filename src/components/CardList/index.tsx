import React, { Component } from 'react';
import CardMovie from './../CardMovie';

import './styles.scss';
import { inject, observer, Provider } from 'mobx-react';
import MoviesStore from './../../stores/MoviesStore';
import GenreStore from '../../stores/GenreStore';

@inject('moviesStore')
@observer
export default class CardList extends Component<{ moviesStore?: MoviesStore }> {
    genreStore = new GenreStore();

    componentDidMount() {
        this.getTopRatedMovies();
    }

    getTopRatedMovies = async () => {
        await this.props.moviesStore!.getTopRatedMoviesList(1);
    }

    render() {
        return (
            <div className="card-list">
                {
                    this.props.moviesStore!.listMoviesDisplay != null ?
                    this.props.moviesStore!.listMoviesDisplay.map(movie => (
                            <Provider key={movie.id} genreStore={this.genreStore}>
                                <CardMovie movie={movie} />
                            </Provider>
                        )) : ''
                }
            </div>
        );
    }
}
