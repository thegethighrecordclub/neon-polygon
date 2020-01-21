import React from 'react';
import './css/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className='App'>
      <a href='/about' className='kaleidoscope'></a>
    </div>
  );
}
