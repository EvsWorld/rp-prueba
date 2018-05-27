import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';
// import Layout  ??
import MoviePage from './components/MoviePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route path="/movie/:id" component={MoviePage} />
      </div>
    );
  }
}

export default App;
