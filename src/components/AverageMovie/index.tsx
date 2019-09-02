import React, { Component } from 'react';

import './styles.scss';

interface IProps {
    voteAverage: number,
    page: string
}

export default class AverageMovie extends Component<IProps> {
    render() {
        return (
            <div>
                <button className={`average-value ${this.props.page}`}>{`${this.props.voteAverage * 10}%`}</button>
            </div>
        );
    }
}