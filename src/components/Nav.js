import React from 'react';
import Navigation from './Navigation'
import logo from '../images/logo.png'

const Nav = (props) => {

    return (
    <nav class='nav'>
        <a href='#' id='logo'><img src={logo}></img></a>
            <Navigation items = {props.items} />
        <a href='#' onClick = {props.onClick} id='cart'><i class="fas fa-shopping-cart"></i></a>
    </nav>
    )
}

export default Nav;