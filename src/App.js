import "./App.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "@internal/pages/Home/Home";
import NotFound from '@internal/pages/NotFound/NotFound';

function App() {
    return (
        <div className="App">
            <Router basename="/">
                <Switch>
                    <Route path="/" exact>
                        <Home/>
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
