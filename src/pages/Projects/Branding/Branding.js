import React from 'react';

import classes from './Branding.module.css';

import logo1 from '@internal/assets/images/branding/logo1.png';
import logo2 from '@internal/assets/images/branding/logo2.png';
import logo3 from '@internal/assets/images/branding/logo3.png';
import logo4 from '@internal/assets/images/branding/logo4.png';
import logo5 from '@internal/assets/images/branding/logo5.png';

const projects = [
    { id: "laura-zavaleta", url: "https://www.behance.net/gallery/110850583/Laura-Zavaleta", image: logo1 },
    { id: "collage", url: "https://www.behance.net/gallery/110919619/COLLAGE", image: logo2 },
    { id: "grupo-azul", url: "https://www.behance.net/gallery/110922717/GRUPO-AZUL", image: logo3 },
    { id: "the-point", url: "https://www.behance.net/gallery/110923707/THE-POINT", image: logo4 },
    { id: "donut-bar", url: "https://www.behance.net/gallery/110924593/DONUT-BAR", image: logo5 },
];

const Branding = props => {
    return (
        <div className={classes.container}>
            { projects.map(project => (
                <a key={project.id} href={project.url} target="_blank" rel="noreferrer">
                    <img src={project.image} alt={project.id} />
                </a>
            )) }
        </div>
    );
}

export default Branding;