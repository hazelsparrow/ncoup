import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './basscss.css';
import NewRoom from './views/NewRoom';

class App extends Component {
  render() {
    return (
      <div className='p4'>
        <NewRoom/>
      </div>
    );
  }
}

export default App;
