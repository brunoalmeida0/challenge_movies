import React, { Component } from 'react';

import './styles.scss'

export default class Pagination extends Component {
    render() {
        return (
            <div>
                <button className="page btnPage">1</button>
                <button className="page btnPage">2</button>
                <button className="page btnPageActive">3</button>
                <button className="page btnPage">4</button>
                <button className="page btnPage">5</button>
            </div>
        )
    }
}