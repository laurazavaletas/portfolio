import React from 'react';

import classes from './Home.module.css';

import FPBSection from '@internal/components/FullPageBgSection/FullPageBgSection';
import homeBg from '@internal/assets/images/backgrounds/home.jpg';
import logo from '@internal/assets/images/home/logo.png';

import HomeName from '@internal/components/HomeName/HomeName';
import MainFooter from '@internal/components/MainFooter/MainFooter';

const Home = props => {
    return (
        <FPBSection bgImage={homeBg} className={classes.container}>
            <HomeName />
            <figure>
                <img src={logo} alt="Logo"/>
            </figure>
            <MainFooter/>
        </FPBSection>
    );
}

export default Home;