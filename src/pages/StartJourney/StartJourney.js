import React from 'react';

import classes from './StartJourney.module.css';
import bg from '@internal/assets/images/backgrounds/startjourney.jpg';

import NavPage from '@internal/components/NavPage/NavPage';
import MainFooter from '@internal/components/MainFooter/MainFooter';

const StartJourney = props => {
    return (
        <NavPage bgimage={bg} about>
            <main className={classes.container}>
                <div className={classes.title}>
                    <h1>Start</h1>
                    <h1>Journey</h1>
                </div>
    
                <a className={ classes.email } href="mailto:laumazasa@gmail.com">
                    laumazasa@gmail.com
                </a>
    
                <MainFooter/>
            </main>
        </NavPage>
    );
}

export default StartJourney;