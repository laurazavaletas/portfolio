import React, { useRef } from 'react';

import { Switch, Route, withRouter, NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';

import classes from './Projects.module.css';
import bg from '@internal/assets/images/backgrounds/projects.jpg';

import EditorialBG from "@internal/assets/images/backgrounds/editorial.jpg";
import PDevBG from "@internal/assets/images/backgrounds/projectDev.jpg";
import BrandingBG from "@internal/assets/images/backgrounds/branding.jpg";

import Branding from './Branding/Branding';
import EditorialDesign from './EditorialDesign/EditorialDesign';
import ProjectDev from './ProjectDev/ProjectDev';

import NavPage from '@internal/components/NavPage/NavPage';
import NotFound from '@internal/pages/NotFound/NotFound'
import ProjectsLayout from '@internal/components/ProjectsLayout/ProjectsLayout';

const projects = [
    { id: "branding", title: "Branding", path: "/branding", bg: BrandingBG, component: Branding },
    { id: "project-dev", title: "Project Development", path: "/project-dev", bg: PDevBG, component: ProjectDev },
    { id: "editorial", title: "Editorial Design", path: "/editorial-design", bg: EditorialBG, component: EditorialDesign },
]

const Projects = props => {
    const mainRef = useRef();
    const location = useLocation();
    
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
                                onClick={() => {
                                    setTimeout(() => {
                                        window.scrollTo({
                                            top: mainRef.current.offsetTop + mainRef.current.offsetHeight,
                                            behavior: "smooth"
                                        })
                                    }, 50)
                                }}
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
                        <AnimatePresence exitBeforeEnter initial={false}>
                            <Switch location={location} key={location.pathname}>
                                {projects.map(project => (
                                    <Route exact key={project.id} path={`${props.match.path}${project.path}`}>
                                        <motion.div exit={{ opacity: 0, dur: 500 }} initial={{ opacity: 0 }} animate={{opacity:1, dur: 500}}>
                                            <Helmet>
                                                <title> Laura Zavaleta || {project.title} </title>
                                            </Helmet>
                                            <ProjectsLayout title={project.title} bgImage={project.bg}>
                                                <project.component/>
                                            </ProjectsLayout>
                                        </motion.div>
                                    </Route>
                                ))}
                                <Route>
                                    <NotFound/>
                                </Route>
                            </Switch>
                        </AnimatePresence>
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default withRouter(Projects);