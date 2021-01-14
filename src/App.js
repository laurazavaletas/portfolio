import "./App.css";

import { Switch, Route, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

import Home from "@internal/pages/Home/Home";
import NotFound from '@internal/pages/NotFound/NotFound';
import About from '@internal/pages/AboutMe/AboutMe';
import StartJourney from '@internal/pages/StartJourney/StartJourney';
import Projects from '@internal/pages/Projects/Projects';

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <Switch location={location} key={location.pathname}>
                <Route path="/" exact>
                    <Wrapper>
                        <Home/>
                    </Wrapper>
                </Route>
                <Route path="/about-me" exact>
                    <Wrapper>
                        <About/>
                    </Wrapper>
                </Route>
                <Route path="/start-journey" exact>
                    <Wrapper>
                        <StartJourney/>
                    </Wrapper>
                </Route>
                <Route path="/projects">
                    <Wrapper>
                        <Projects/>
                    </Wrapper>
                </Route>
                <Route>
                    <Wrapper>
                        <NotFound/>
                    </Wrapper>
                </Route>
            </Switch>
        </div>
    );
}

const Wrapper = ({ children }) => (
    <motion.div exit={{ opacity: 0, dur: 1000 }} initial={{ opacity: 0 }} animate={{ opacity: 1, dur: 1000 }}>
        {children}
    </motion.div>
);

export default App;
