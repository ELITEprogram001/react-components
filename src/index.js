import AggressiveClock from './components/AggressiveClock.js';
import NumberConverter from './components/NumberConvertor.js';
import BusinessCard from './components/BusinessCard'
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <>
        <BusinessCard />
        <AggressiveClock />
        <NumberConverter />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));