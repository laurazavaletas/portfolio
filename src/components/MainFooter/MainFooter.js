import React from 'react';

import classes from './MainFooter.module.css';

const links = [
    { id: "instagram", text: "Instagram", href: "https://www.instagram.com/laurazavaletas/" },
    { id: "behance", text: "Behance", href: "https://www.behance.net/laurazavaleta" },
    { id: "linkedin", text: "Linkedin", href: "https://www.linkedin.com/in/laura-zavaleta-b024b01a8/" }
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