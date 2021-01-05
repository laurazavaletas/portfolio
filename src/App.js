import "./App.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "@internal/pages/Home/Home";
import NotFound from '@internal/pages/NotFound/NotFound';
import About from '@internal/pages/AboutMe/AboutMe';
import StartJourney from '@internal/pages/StartJourney/StartJourney';
import Projects from '@internal/pages/Projects/Projects';

function App() {
    return (
        <div className="App">
            <Router basename="/">
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/about-me">
                        <About/>
                    </Route>
                    <Route path="/start-journey">
                        <StartJourney/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
