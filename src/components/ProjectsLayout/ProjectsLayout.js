import React, { useRef } from 'react';

import { NavLink } from "react-router-dom";
import classes from './ProjectsLayout.module.css';

import FPBSection from '@internal/components/FullPageBgSection/FullPageBgSection';

const projects = [
    { id: "branding", title: "Branding", path: "/projects/branding" },
    { id: "project-dev", title: "Project Development", path: "/projects/project-dev" },
    { id: "editorial", title: "Editorial Design", path: "/projects/editorial-design" },
]

const ProjectsLayout = ({ children, bgImage, title }) => {
    const titleRef = useRef();

    return (
        <FPBSection bgImage={bgImage}>
            <h1 ref={titleRef}
                className={classes.title}>
                {title}
            </h1>
            <div className={classes.container}>
                <section>
                    { children }
                </section>
                <nav className={classes.links}>
                    {projects.map(project => (
                        <NavLink
                            key={project.id}
                            activeClassName={classes.active}
                            onClick={() => { window.scrollTo({top: titleRef.current.offsetTop, behavior:"smooth"}) }}
                            to={project.path}>
                            { project.title }
                        </NavLink>
                    )) }
                </nav>
            </div>
        </FPBSection>
    );
}

export default ProjectsLayout;