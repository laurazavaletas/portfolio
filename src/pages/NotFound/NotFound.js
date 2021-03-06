import React from 'react';
import { Helmet } from 'react-helmet';

import classes from './Notfound.module.css';
import bg from '@internal/assets/images/backgrounds/notfound.jpg'

import FPBSection from '@internal/components/FullPageBgSection/FullPageBgSection';

const NotFound = props => {
    return (
        <FPBSection bgImage={bg} className={classes.container}>
            <Helmet>
                <title> Laura Zavaleta || Not Found </title>
            </Helmet>
            <h1> <span>404</span> Not Found :( Sorry.</h1>
        </FPBSection>
    );
}

export default NotFound;