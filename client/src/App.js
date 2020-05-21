import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import './App.css';
import Home from "./components/Home";
import Sorting from "./components/Sorting";
import Spells from "./components/Spells";

const history = createBrowserHistory({ basename: ""})

class App extends React.Component {
  render(){
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sorting" component={Sorting} />
            <Route exact path="/spells" component={Spells} />
          </Switch>
        </div>
      </Router>
    )
  };
};

export default App;
