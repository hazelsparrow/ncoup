import React, { Component } from 'react';
import logo from './logo.svg';
import './basscss.css';
import './App.css';
import AppPage from './views/AppPage';

class App extends Component {
  render() {
    return (
      <div className='p4'>
        <AppPage/>
      </div>
    );
  }
}

export default App;
