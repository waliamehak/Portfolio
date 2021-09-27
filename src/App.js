import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Projects from './pages/Projects';
const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path = '/contact-me'>
          <Contact/>
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
