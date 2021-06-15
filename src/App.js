import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/layout/Header';
import Movies from './components/pages/movies/Movies';
import Movie from './components/pages/movies/Movie';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' />
          <Route exact path='/movies' component={Movies} />
          <Route exact path='/movie/:id' component={Movie} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
