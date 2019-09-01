import React, { Component } from 'react';
import Header from './../../components/Header';
import CardDetailMovie from './../../components/CardDetailMovie';
import { Provider } from 'mobx-react';
import MoviesStore from './../../stores/MoviesStore';
import { match, RouteComponentProps } from 'react-router';

interface IState {
    id: string;
  }

export default class Details extends Component<RouteComponentProps<IState>> {
    moviesStore = new MoviesStore();

    render() {
        const { id } = this.props.match.params;
        return (
            <div>
                <Header />
                <Provider moviesStore={this.moviesStore}>
                    <CardDetailMovie idMovie={id} />
                </Provider>
            </div>
        );
    }
}