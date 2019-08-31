import React, { Component } from 'react';
import AverageMovie from '../AverageMovie';

import './styles.scss';

export default class CardDetailMovie extends Component {
    render() {
        return (
            <div className="card-details">
                <div className="card-header">
                    <h1 className="title movie-title">Thor: Ragnarok</h1>
                    <p className="date">25/10/2017</p>
                </div>
                <div className="card-body">
                    <div className="content">
                        <div>
                            <h2 className="title title-details">Sinopse</h2>
                            <hr />
                            <p className="sinopse-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat unde voluptatum sunt hic modi culpa voluptates dolorem autem eligendi sapiente sed quasi, tempora nobis repellendus numquam nisi vero beatae? Repudiandae.</p>
                        </div>

                        <div>
                            <h2 className="title title-details">Informações</h2>
                            <hr />
                            <div className="infos">
                                <div className="title-details-info situacao">
                                    <h3 className="title">Situação</h3>
                                    <p>Lançado</p>
                                </div>
                                <div className="title-details-info idioma">
                                    <h3 className="title">Idioma</h3>
                                    <p>Inglês</p>
                                </div>
                                <div className="title-details-info duracao">
                                    <h3 className="title">Duração</h3>
                                    <p>2h 10min</p>
                                </div>
                                <div className="title-details-info orcamento">
                                    <h3 className="title">Orçamento</h3>
                                    <p>$180.000.000,00</p>
                                </div>
                                <div className="title-details-info receita">
                                    <h3 className="title">Receita</h3>
                                    <p>$180.000.000,00</p>
                                </div>
                                <div className="title-details-info lucro">
                                    <h3 className="title">Lucro</h3>
                                    <p>$180.000.000,00</p>
                                </div>
                            </div>
                        </div>
                        <div className="genres-average">
                            <div className="movie-genres">
                                <div className="genre">Ação</div>
                                <div className="genre">Aventura</div>
                                <div className="genre">Fantasia</div>
                            </div>
                            <AverageMovie />
                        </div>
                    </div>
                    <div className="poster">
                        <img className="movie-poster" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg" alt="Poster do filme" />
                    </div>
                </div>
                <iframe className="trailer" src="http://localhost:3000"></iframe>
            </div >



            // <div className="card">
            //     <img className="movie-poster" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg" alt="Poster do filme" />
            //     <div className="card-content">
            //         <div className="card-header">
            //             <div className="movie-vote">
            //             </div>
            //             <div className="title-release">
            //                 <div>
            //                     <h1 className="movie-title">Thor: Ragnarok</h1>
            //                 </div>
            //                 <div className="movie-release-container">
            //                     <legend className="movie-release">25/10/2007</legend>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="card-body">
            //             <p className="movie-overview">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quo assumenda unde aut, ex voluptas eveniet, veniam necessitatibus numquam ratione temporibus soluta consequuntur illo quis quae eius, eligendi distinctio similique.</p>
            //             <div className="movie-genres">
            //                 <div className="genre">Ação</div>
            //                 <div className="genre">Aventura</div>
            //                 <div className="genre">Fantasia</div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}