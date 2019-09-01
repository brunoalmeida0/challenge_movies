import React, { Component } from 'react';

import './styles.scss';

export default class AverageMovie extends Component<{ voteAverage: number, page: string }> {

    constructor(props: { voteAverage: number, page: string }) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className={`average-value ${this.props.page}`}>{`${this.props.voteAverage * 10}%`}</button>               
            </div>
        );
    }
}