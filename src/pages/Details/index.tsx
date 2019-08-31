import React, { Component } from 'react';
import Header from './../../components/Header';
import CardDetailMovie from './../../components/CardDetailMovie';

export default class Details extends Component {
    render() {
        return (
            <div>
                <Header />
                <CardDetailMovie />
            </div>
        );
    }
}