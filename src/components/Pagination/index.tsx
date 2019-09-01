import React, { Component } from 'react';

import './styles.scss'
import { inject } from 'mobx-react';
import { observer } from 'mobx-react';
import MoviesStore from '../../stores/MoviesStore';


@inject('moviesStore')
@observer
export default class Pagination extends Component<{ moviesStore?: MoviesStore }> {
    lastRealPage: number = 1;

    navigateForPage = async (e: any, value: any) => {
        this.props.moviesStore!.displayPage = parseInt(e.target.value);
        let realPage = Math.ceil(e.target.value / 4);
        if (this.lastRealPage !== realPage) {
            await this.props.moviesStore!.lastRequest(realPage);
            this.props.moviesStore!.setMoviesDisplay();
            this.lastRealPage = realPage;
        }

        let numero = this.props.moviesStore!.displayPage / 4;
        let aux = Math.floor(numero);
        let resto = numero - aux;

        if (resto === 0.25) {

            this.props.moviesStore!.setMoviesDisplay(this.props.moviesStore!.listMoviesResponse.results.slice(0, 5));
        } else if (resto === 0.5) {
            this.props.moviesStore!.setMoviesDisplay(this.props.moviesStore!.listMoviesResponse.results.slice(5, 10));
        } else if (resto === 0.75) {
            this.props.moviesStore!.setMoviesDisplay(this.props.moviesStore!.listMoviesResponse.results.slice(10, 15));
        } else if (resto === 0) {
            this.props.moviesStore!.setMoviesDisplay(this.props.moviesStore!.listMoviesResponse.results.slice(15, 20));
        }


    }

    render() {
        const { total_pages } = this.props.moviesStore!.listMoviesResponse;
        let count: number = 1;
        let pages = [];
        let btnPage: string;

        let totalPagination = total_pages * 4;

        while (count <= totalPagination) {
            btnPage = this.props.moviesStore!.displayPage === count ? 'btnPageActive' : 'btnPage';

            if ((count >= this.props.moviesStore!.displayPage - 2 && count <= this.props.moviesStore!.displayPage + 2)) {
                pages.push(<button key={count} className={`page ${btnPage}`} value={count} onClick={(e) => this.navigateForPage(e, 'value')}>{count}</button>)
            }
            count++;
        }

        return (
            <div>
                {pages}
            </div>
        )
    }
}
