import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// code here...

import Banner from './Banner';
import Menu from './Menu';
import Videos from './Videos';
import About from './About';
import Footer from './Footer';
import Overlay from './Overlay';

const App = () => (
  <Router>
    <div>
      <Banner />
      <Menu />
      <Switch>
        <Route path="/vid" component={Videos} />
        <Route path="/about" component={About} />
        <Redirect to="/vid" />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
