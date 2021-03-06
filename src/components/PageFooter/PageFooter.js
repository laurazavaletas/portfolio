import React from 'react';

import classes from './PageFooter.module.css';

import toTopButton from '@internal/assets/images/footer/button.png';

const PageFooter = ({scrollTo}) => {
    return (
        <footer className={classes.container}>
            <a href="https://www.instagram.com/laurazavaletas/" target="_blank" rel="noreferrer">
                Instagram
            </a>
            <button
                onClick={ 
                    () => { 
                        window.scrollTo({ top: scrollTo(), behavior: "smooth" });
                    }}>
                <img src={toTopButton} alt="Top button"/>
            </button>
            <a href="https://www.behance.net/laurazavaleta" target="_blank" rel="noreferrer">
                Behance
            </a>
        </footer>
    );
}

export default PageFooter;