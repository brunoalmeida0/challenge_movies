import React, { Component } from 'react';
import MoviesStore from '../../stores/MoviesStore';
import { Provider } from 'mobx-react';
import Header from './../../components/Header';
import Pagination from './../../components/Pagination';
import CardList from './../../components/CardList/index';
import SearchInput from './../../components/SearchInput/index';

import './styles.scss'
import GenreStore from '../../stores/GenreStore';

class Home extends Component {

    moviesStore = new MoviesStore();
    genresStore = new GenreStore();

    render() {
        return (
            <div>
                <Header />
                <div className="app-body">
                    <Provider moviesStore={this.moviesStore}>
                        <Provider genresStore={this.genresStore}>
                            <SearchInput />
                        </Provider>
                        <CardList />
                        <Pagination />
                    </Provider>
                </div>
            </div>
        );
    }
}

export default Home;