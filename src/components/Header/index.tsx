import React from 'react';
import './styles.scss';

//StatelessComponent
const Header = () => ( //Como esta função só terá um return, usar () deixa isso implícito ao invés de fazer com {} e explicitar o retorno
    <header className="app-header">Movies</header>
);

export default Header;