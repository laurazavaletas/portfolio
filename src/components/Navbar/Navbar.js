import React from 'react';

import classes from './Navbar.module.css';

import logo from '@internal/assets/images/navbar/logo.png';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ about }) => {
    const color = about ? "#fff" : "#72509B";
    return (
        <nav className={classes.navbar}>
            <Link to="/" className={ classes.logoContainer }>
                <img src={logo} alt="Logo"/>
            </Link>
            <div className={ classes.links }>
                <NavLink to="/projects" activeClassName={ classes.active}>
                    Projects
                </NavLink>
                <NavLink to="/about-me" activeClassName={ classes.active}>
                    About Me
                </NavLink>
                <NavLink to="/start-journey" activeClassName={classes.active} style={{color}}>
                    Start Journey
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;