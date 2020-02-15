import React from 'react';
import './css/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
