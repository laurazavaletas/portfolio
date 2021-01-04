import React from 'react';

import classes from './FullPageBgSection.module.css';
import FPSection from '@internal/components/FullPageSection/FullPageSecton';

const FullPageBgSection = ({ className, bgImage, children }) => {
    return (
        <FPSection>
            <div
                className={ [ classes.bg, className ].join(" ") }
                style={{ backgroundImage: `url(${bgImage})` }}>
                { children }
            </div>
        </FPSection>
    );
}

export default FullPageBgSection;