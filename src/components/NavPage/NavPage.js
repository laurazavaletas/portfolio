import React from 'react';

import classes from './NavPage.module.css'; 

import Navbar from '@internal/components/Navbar/Navbar';
import FPBSection from '@internal/components/FullPageBgSection/FullPageBgSection';

const NavPage = ({ bgimage, children, className, about}) => {
    return (
        <FPBSection bgImage={bgimage} className={ [classes.section, className].join(" ") }>
            <Navbar/>
            { children }
        </FPBSection>
    );
}

export default NavPage;