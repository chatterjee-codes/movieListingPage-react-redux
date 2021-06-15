import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Movies from './components/pages/movies/Movies';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' />
          <Route exact path='/movies' component={Movies} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
