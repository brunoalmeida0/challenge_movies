import React, { Component } from 'react';

import './styles.scss'
import { inject } from 'mobx-react';
import { observer } from 'mobx-react';
import MoviesStore from '../../stores/MoviesStore';

interface IProps {
    moviesStore?: MoviesStore
}

@inject('moviesStore')
@observer
export default class Pagination extends Component<IProps> {
    lastRealPage: number = 1;

    navigateForPage = async (event: any) => {
        const { moviesStore } = this.props;
        let pageClicked = event.target.value;
        let realPage = Math.ceil(pageClicked / 4);
        
        moviesStore!.displayPage = parseInt(pageClicked);
        
        if (this.lastRealPage !== realPage) {
            await moviesStore!.lastRequest(realPage);
            moviesStore!.setMoviesDisplay();
            this.lastRealPage = realPage;
        }

        let positionOfPageDisplay = moviesStore!.displayPage / 4;
        let aux = Math.floor(positionOfPageDisplay);
        let fraction = positionOfPageDisplay - aux;

        if (fraction === 0.25) {
            moviesStore!.setMoviesDisplay(moviesStore!.listMoviesResponse.results.slice(0, 5));
        } else if (fraction === 0.5) {
            moviesStore!.setMoviesDisplay(moviesStore!.listMoviesResponse.results.slice(5, 10));
        } else if (fraction === 0.75) {
            moviesStore!.setMoviesDisplay(moviesStore!.listMoviesResponse.results.slice(10, 15));
        } else if (fraction === 0) {
            moviesStore!.setMoviesDisplay(moviesStore!.listMoviesResponse.results.slice(15, 20));
        }


    }

    render() {
        const { total_pages } = this.props.moviesStore!.listMoviesResponse;
        let count: number = 1;
        let pages: JSX.Element[] = [];
        let btnPage: string;
        let totalPagination = total_pages * 4;

        while (count <= totalPagination) {
            btnPage = this.props.moviesStore!.displayPage === count ? 'btnPageActive' : 'btnPage';

            if ((count >= this.props.moviesStore!.displayPage - 2 && count <= this.props.moviesStore!.displayPage + 2)) {
                pages.push(<button key={count} className={`page ${btnPage}`} value={count} onClick={(e) => this.navigateForPage(e)}>{count}</button>)
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
