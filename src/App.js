import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Switch>
      <Redirect exact from='/home' to='/home/about' />
      <Route exact path='/home/:page' render={props => <Home {...props} />} />
    </Switch>
  );
}

export default App;
