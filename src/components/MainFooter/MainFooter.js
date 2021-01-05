import React from 'react';

import classes from './MainFooter.module.css';

const links = [
    { id: "instagram", text: "Instagram", href: "https://google.com" },
    { id: "behance", text: "Behance", href: "https://google.com" },
    { id: "app_store", text: "App Store", href: "https://google.com" }
]

const MainFooter = props => {
    return (
        <footer className={classes.menu}>
            {
                links.map(link => (<a key={link.id} href={ link.href} target="_blank" rel="noreferrer">
                    { link.text }
                </a>))
            }
        </footer>
    );   
}

export default MainFooter;