import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Module from './components/Module/Module.js';
import CoS from './data/curse_of_strahd.js';


class App extends Component {
    constructor() {
        super();
        this.state = {
            module: CoS,
        }
    }

    render() {
        console.log(CoS)
        return (
            <Router>
                <div>
                    {this.state.module.locations.map(elem =>
                          <li><Link to={elem.path} key={`path:${elem.path}`}>{elem.title}</Link></li>
                    )}
                </div>
                <div>
                    {this.state.module.locations.map(elem =>
                          <Route path={elem.path} key={elem.title}
                          render={(props) => <Module {...props} title={elem.title} path={elem.path} specifics={elem.specifics} key={`Module:${elem.title}`} />} />
                    )}
                </div>
            </Router>
        );
    }
}

export default App;
