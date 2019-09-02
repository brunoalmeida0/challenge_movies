import React, { Component } from 'react';
import AverageMovie from './../AverageMovie';
import Movie from '../../models/Movie';
import { Provider } from 'mobx-react';

import './styles.scss'
import GenreStore from '../../stores/GenreStore';
import Genres from './../Genres/index';
import { Link } from 'react-router-dom';

interface IProps {
    movie: Movie
}

export default class CardMovie extends Component<IProps> {
    genreStore = new GenreStore();

    render() {
        const { poster_path, vote_average, title, overview, genre_ids, id, release_date } = this.props.movie;

        return (
            <div className="card">
                <Link className="linkToDetails" to={`details/${id}`}><img className="movie-poster" alt="Poster do filme" src={`https://image.tmdb.org/t/p/w200${poster_path}`} /></Link>
                <div className="card-content">
                    <div className="card-header">
                        <div className="movie-vote">
                            <div className="imgtemp">
                                <AverageMovie voteAverage={vote_average} page='card-movie' />
                            </div>
                        </div>
                        <div className="title-release">
                            <div>
                                <Link className="linkToDetails" to="details"><h1 className="movie-title">{title}</h1></Link>
                            </div>
                            <div className="movie-release-container">
                                <legend className="movie-release">{release_date.split('-').reverse().join('/')}</legend>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="movie-overview">{overview !== '' ? overview : 'Não há sinopse para este filme.'}</p>
                        <Provider genreStore={this.genreStore} >
                            <Genres genreIds={genre_ids} />
                        </Provider>
                    </div>
                </div>
            </div>
        )
    }
}