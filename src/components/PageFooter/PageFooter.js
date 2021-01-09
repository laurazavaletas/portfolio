import React from 'react';

import classes from './PageFooter.module.css';

import toTopButton from '@internal/assets/images/footer/button.png';

const PageFooter = props => {
    return (
        <footer>
            <a href="https://google.com" target="_blank" rel="noreferrer">
                Instagram
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
                <img src={toTopButton} />
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
                Behance
            </a>
        </footer>
    );
}

export default PageFooter;