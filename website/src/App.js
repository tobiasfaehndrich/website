import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Work from './components/pages/Work';
import Play from './components/pages/Play';
import Thoughts from './components/pages/Thoughts';
import Secrets from './components/pages/Secrets';
import About from './components/pages/About';
import Favourite from './components/pages/Favourite';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/play' component={Play} />
          <Route path='/thoughts' component={Thoughts} />
          <Route path='/secrets' component={Secrets} />
          <Route path='/about' component={About} />
          <Route path='/favourite' component={Favourite} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
