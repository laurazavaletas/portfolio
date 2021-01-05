import React from 'react';

import bg from '@internal/assets/images/backgrounds/about.jpg';
import classes from './AboutMe.module.css';

import NavPage from '@internal/components/NavPage/NavPage';

const AboutMe = props => {
    return (
        <NavPage about bgimage={bg} className={ classes.page }>

        </NavPage>
    );
}

export default AboutMe;