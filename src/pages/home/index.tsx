import React, { Component } from 'react';
import MoviesStore from '../../stores/MoviesStore';
import { inject, observer } from 'mobx-react';
import Header from './../../components/Header';
import CardMovie from './../../components/CardMovie';
import Pagination from './../../components/Pagination';
import AverageMovie from './../../components/AverageMovie';

import './styles.scss'

const Home = inject("store")(
    observer(
        class Home extends Component<{ store?: MoviesStore }> {

            constructor(props: { store?: MoviesStore }) {
                super(props);
            }

            componentDidMount() {
                this.props.store!.getTopRatedMoviesList();
                // this.movieStore.retrieveMovieById(19404);
                // this.movieStore.searchMoviesByName('Vingadores');
            }

            render() {
                return (
                    <div>
                        <Header />
                        <div className="card-list">
                            <CardMovie />
                            <CardMovie />
                            
                            <Pagination />
                        </div>
                    </div>
                );
            }
        }
    )
);

export default Home;