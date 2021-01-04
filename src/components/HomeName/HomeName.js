import React from 'react';

import classes from './HomeName.module.css';

const HomeName = ({ dark }) => {
    const color = dark ? "#72509B" : "#fff";

    return (
        <header className={classes.container} style={{color: color}}>
            <h1 className={classes.name}>Laura Zavaleta</h1>
            <h2 className={classes.prf}>Diseño Gráfico</h2>
        </header>
    );
}

export default HomeName;