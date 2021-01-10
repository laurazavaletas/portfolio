import React, { useRef } from 'react';

import { Switch, Route, withRouter, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import classes from './Projects.module.css';
import bg from '@internal/assets/images/backgrounds/projects.jpg';

import EditorialBG from "@internal/assets/images/backgrounds/editorial.jpg";
import PDevBG from "@internal/assets/images/backgrounds/projectDev.jpg";
import BrandingBG from "@internal/assets/images/backgrounds/branding.jpg";

import Branding from './Branding/Branding';

import NavPage from '@internal/components/NavPage/NavPage';
import NotFound from '@internal/pages/NotFound/NotFound'
import ProjectsLayout from '@internal/components/ProjectsLayout/ProjectsLayout';

const projects = [
    { id: "branding", title: "Branding", path: "/branding", bg: BrandingBG },
    { id: "project-dev", title: "Project Development", path: "/project-dev", bg: PDevBG },
    { id: "editorial", title: "Editorial Design", path: "/editorial-design", bg: EditorialBG },
]

const Projects = props => {
    const mainRef = useRef();

    return (
        <>
            <NavPage bgimage={bg} about>
                <main className={ classes.container } ref={mainRef}>
                    <h1> Projects </h1>
                    <div className={classes.mainmenu}>
                        {projects.map(project => (
                            <NavLink
                                className={classes["mainmenu-link"]}
                                activeClassName={classes["mainmenu-link-active"]}
                                onClick={() => window.scrollTo({
                                    top: mainRef.current.offsetTop + mainRef.current.offsetHeight,
                                    behavior: "smooth"
                                })}
                                key={project.id} to={`${props.match.path}${project.path}`}>
                                {project.title}
                            </NavLink>
                        )) }
                    </div>
                </main>
            </NavPage>
            <Switch>
                <Route path={props.match.path} exact>
                    <Helmet>
                        <title> Laura Zavaleta || Projects </title>
                    </Helmet>
                </Route>
                <Route>
                    <div>
                        <Switch>
                            {projects.map(project => (
                                <Route key={project.id} path={`${props.match.path}${project.path}`}>
                                    <Helmet>
                                        <title> Laura Zavaleta || {project.title} </title>
                                    </Helmet>
                                    <ProjectsLayout title={project.title} bgImage={project.bg}>
                                        <Branding/>
                                    </ProjectsLayout>
                                </Route>
                            ))}
                            <Route>
                                <NotFound/>
                            </Route>
                        </Switch>
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default withRouter(Projects);