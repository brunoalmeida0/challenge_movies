import React, { Component } from 'react';
import AverageMovie from '../AverageMovie';
import MoviesStore from './../../stores/MoviesStore';

import './styles.scss';
import { inject, observer, Provider } from 'mobx-react';
import Genres from './../Genres/index';
import GenreStore from './../../stores/GenreStore';
import LanguageUtil from './../../util/LanguageUtil';
import StatusUtil from './../../util/StatusUtil';

interface IProps {
    idMovie: string,
    moviesStore?: MoviesStore
}

@inject('moviesStore')
@observer
export default class CardDetailMovie extends Component<IProps>{

    genreStore = new GenreStore();

    componentDidMount() {
        this.retrieveMovieById();
        this.getTrailers();
    }
    
    retrieveMovieById = async () => {
        await this.props.moviesStore!.retrieveMovieById(this.props.idMovie);
    }

    getTrailers = async () => {
        await this.props.moviesStore!.getTrailerByMovieId(this.props.idMovie);
    }

    render() {
        const { moviesStore } = this.props;

        if (moviesStore!.movieSelected !== undefined) {
            const { title, overview, poster_path, revenue, budget, vote_average, genres, original_language, status } = moviesStore!.movieSelected;
            let trailers:  JSX.Element[] = []
            if (moviesStore!.trailers !== undefined) {
                trailers = moviesStore!.trailers.results.map(trailer => {
                    return <iframe title="trailer" className="trailer" src={`https://www.youtube.com/embed/${trailer.key}`}></iframe>
                })
            }

            return (
                <div className="card-details">
                    <div className="card-header">
                        <h1 className="title movie-title">{title}</h1>
                        <p className="date">{moviesStore!.formatReleaseDate}</p>
                    </div>
                    <div className="card-body">
                        <div className="content">
                            <div>
                                <h2 className="title title-details">Sinopse</h2>
                                <hr />
                                <p className="sinopse-text">{overview}</p>
                            </div>

                            <div>
                                <h2 className="title title-details">Informações</h2>
                                <hr />
                                <div className="infos">
                                    <div className="title-details-info situacao">
                                        <h3 className="title">Situação</h3>
                                        <p>{StatusUtil.getStatusInPtBr(status)}</p>
                                    </div>
                                    <div className="title-details-info idioma">
                                        <h3 className="title">Idioma</h3>
                                        <p>{LanguageUtil.getLanguageInPtBr(original_language)}</p>
                                    </div>
                                    <div className="title-details-info duracao">
                                        <h3 className="title">Duração</h3>
                                        <p>{this.props.moviesStore!.calculateDuration}</p>
                                    </div>
                                    <div className="title-details-info orcamento">
                                        <h3 className="title">Orçamento</h3>
                                        <p>{`$${budget.toLocaleString()},00`}</p>
                                    </div>
                                    <div className="title-details-info receita">
                                        <h3 className="title">Receita</h3>
                                        <p>{`$${revenue.toLocaleString()},00`}</p>
                                    </div>
                                    <div className="title-details-info lucro">
                                        <h3 className="title">Lucro</h3>
                                        <p>{this.props.moviesStore!.calculateProfit}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="genres-average">
                                <Provider genreStore={this.genreStore} >
                                    <Genres genreIds={genres.map(genre => genre.id)} />
                                </Provider>
                                <AverageMovie voteAverage={vote_average} page="details" />
                            </div>
                        </div>
                        <div className="poster">
                            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Poster do filme" />
                        </div>
                    </div>
                    {trailers}
                </div >

            )
        }
        return ''
    }
}