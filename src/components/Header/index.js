import React from 'react';
import Logo from '../Logo';
import Menu from '../Menu';
import './style.scss';

const Header = () => {
    return  (
        <div className="header">
            <div className="content">
            <Logo className="logo" />
            <Menu className="menu" />
            </div>
        </div>
    )
}

export default Header;