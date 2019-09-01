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
    teste: any[] = [];

    // constructor(props: { moviesStore?: MoviesStore }) {
    //     super(props);
    // }

    componentDidMount() {
        this.getTopRatedMovies();
    }

    getTopRatedMovies = async () => {
        await this.props.moviesStore!.getTopRatedMoviesList();
        this.props.moviesStore!.setListMoviesDisplay();

    }

    render() {

        return (
            <div className="card-list">
                {
                    this.props.moviesStore!.listMoviesResponse.results != null ?
                        this.props.moviesStore!.listMoviesResponse.results.map(movie => (
                            <Provider key={movie.id} genreStore={this.genreStore}>
                                <CardMovie movie={movie} />
                            </Provider>
                        )) : ''
                }
            </div>
        );
    }
}
