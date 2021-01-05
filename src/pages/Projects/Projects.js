import React from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import classes from './Projects.module.css';
import bg from '@internal/assets/images/backgrounds/projects.jpg';

import NavPage from '@internal/components/NavPage/NavPage';

const projects = [
    { id: "branding", title: "Branding", path: "/branding" },
    { id: "project-dev", title: "Project Development", path: "/project-dev" },
    { id: "editorial", title: "Editorial Design", path: "/editorial-design" },
]

const Projects = props => {
    console.log(props);
    return (
        <NavPage bgimage={bg}>
            <Switch>
                <Route path={props.match.path} exact>
                    { main }
                </Route>
                {projects.map(project => (
                    <Route key={project.id} path={`${props.match.path}${project.path}`}>
                        <p> {project.title} </p>
                    </Route>
                ))}
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </NavPage>
    );
}

const main = (
    <>
        <Helmet>
            <title> Laura Zavaleta || Projects </title>
        </Helmet>

        <main>
            
        </main>
    </>
);

const NotFound = props => { 
    return (
        <div className={ classes.notFound }>
            <h1> <span>404</span> Not Found, Sorry :c </h1>
        </div>
    );
}

export default withRouter(Projects);