import React, { useRef } from 'react';

import { NavLink } from "react-router-dom";
import classes from './ProjectsLayout.module.css';

import FPBSection from '@internal/components/FullPageBgSection/FullPageBgSection';
import PageFooter from '@internal/components/PageFooter/PageFooter';

const projects = [
    { id: "branding", title: "Branding", path: "/projects/branding" },
    { id: "project-dev", title: "Project Development", path: "/projects/project-dev" },
    { id: "editorial", title: "Editorial Design", path: "/projects/editorial-design" },
    { id: "back", title: "<- Go Back", path: "/projects" },
]

const ProjectsLayout = ({ children, bgImage, title }) => {
    const titleRef = useRef();
    const getTitleRefTop = () => titleRef.current.offsetTop;
    return (
        <FPBSection bgImage={bgImage} className={classes.master}>
            <h1 ref={titleRef}
                className={classes.title}>
                {title}
            </h1>
            <div className={classes.container}>
                <section>
                    { children }
                </section>
                <nav>
                    <div className={classes.links}>
                        {projects.map(project => (
                            <NavLink
                                exact
                                key={project.id}
                                activeClassName={classes.active}
                                onClick={() => { window.scrollTo({top: getTitleRefTop(), behavior:"smooth"}) }}
                                to={project.path}>
                                { project.title }
                            </NavLink>
                        )) }
                    </div>
                </nav>
            </div>
            {/* TODO: Chenge 0 to titleRef.current.offsetTop */}
            <PageFooter scrollTo={()=>titleRef.current.offsetTop}/>
        </FPBSection>
    );
}

export default ProjectsLayout;