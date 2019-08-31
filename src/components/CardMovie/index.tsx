import React, { Component } from 'react';
import AverageMovie from './../AverageMovie';

import './styles.scss'

export default class CardMovie extends Component {
    render() {
        return (
            <div className="card">
                <img className="movie-poster" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg" alt="Poster do filme" />
                <div className="card-content">
                    <div className="card-header">
                        <div className="movie-vote">
                            <div className="imgtemp">
                                <AverageMovie />
                            </div>
                        </div>
                        <div className="title-release">
                            <div>
                                <h1 className="movie-title">Thor: Ragnarok</h1>
                            </div>
                            <div className="movie-release-container">
                                <legend className="movie-release">25/10/2007</legend>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="movie-overview">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quo assumenda unde aut, ex voluptas eveniet, veniam necessitatibus numquam ratione temporibus soluta consequuntur illo quis quae eius, eligendi distinctio similique.</p>
                        <div className="movie-genres">
                            <div className="genre">Ação</div>
                            <div className="genre">Aventura</div>
                            <div className="genre">Fantasia</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}