import React, { Component } from 'react';
import GenreStore from './../../stores/GenreStore';

import './styles.scss'
import Genre from './../../models/Genre';
import { inject, observer } from 'mobx-react';

@inject('genreStore')
@observer
export default class Genres extends Component<{ genreStore?: GenreStore, genreIds: number[] }> {

    async componentDidMount() {
        await this.props.genreStore!.getGenres();
    }

    render() {

        const { genres } = this.props.genreStore!;

        let genresOfMovie: Genre[] = new Array<Genre>();

        if (genres !== undefined) {
            this.props.genreIds.forEach((id: any) => {
                genres.forEach(genre => {
                    if (genre.id === id) {
                        genresOfMovie.push(genre);
                    }
                })
            })
        }
        let genresDisplay = genresOfMovie.map((genre: Genre) => {
            return <div key={genre.id} className="genre">{genre.name}</div>
        });

        return (
            <div className="movie-genres">
                {genresDisplay}
            </div>
        )
    }
}