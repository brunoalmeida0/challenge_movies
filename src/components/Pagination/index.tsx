import React, { Component } from 'react';

import './styles.scss'
import { inject } from 'mobx-react';
import { observer } from 'mobx-react';
import MoviesStore from '../../stores/MoviesStore';


@inject('moviesStore')
@observer
export default class Pagination extends Component<{ moviesStore?: MoviesStore }> {
    // constructor(props: { moviesStore?: MoviesStore }) {
    //     super(props);
    // }

    componentDidMount() {

    }

    render() {
        const { total_pages, page } = this.props.moviesStore!.listMoviesResponse;
        let count: number = 1;
        let pages = [];
        let btnPage: string;
        
        if(total_pages !== undefined) {
            while(count <= total_pages && count <= 10) {
                btnPage = count === page ? 'btnPageActive' : 'btnPage';
                pages.push(<button key={count} className={`page ${btnPage}`}>{count}</button>)
                count++;
            }
        }        


        return (
            <div>
                {pages}
            </div>
        )
    }
}
