import React, { Component } from 'react';
import MoviesStore from './../../stores/MoviesStore';
import { inject, observer } from 'mobx-react';

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
                        <h1>Hello World</h1>
                        <h1>{this.props.store!.listMoviesInfo != null ? this.props.store!.listMoviesInfo.total_pages : "ainda nao rodou"}</h1>
                    </div>
                );
            }
        }
    )
);

export default Home;