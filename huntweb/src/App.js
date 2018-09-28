import React, { Component } from 'react';
import Routes from './routes';

import "./styles.css";

import Header from './components/Header/index';

const App = () => (
  <div className="App">
      <Header />
      <Routes />
  </div>
);

export default App;

/* simplifying the way to write the class
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      </div>
    );
  }
} */
