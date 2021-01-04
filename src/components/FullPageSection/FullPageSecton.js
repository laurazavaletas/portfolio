import React from 'react';

import classes from './FullPageSection.module.css';

const FullPageSecton = ({ children, className }) => {
    return (
        <section className={ [classes.section, className].join(" ") }>
            { children }
        </section>
    );
}

export default FullPageSecton;