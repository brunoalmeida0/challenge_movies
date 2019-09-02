import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

//StatelessComponent
const Header = () => {
    return <header className="app-header"><Link className="home" to={'/'}>Movies</Link></header>
}

export default Header;