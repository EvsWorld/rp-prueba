import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';
// import Layout  ??
import './App.css';
// import SingleMovie from '.components/SingleMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Main} />
        {/* <Route path="/movie::id" component={SingleMovie} /> */}
      </div>
    );
  }
}

export default App;
