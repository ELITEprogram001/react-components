import AggressiveClock from './clock-component.js';
import NumberConverter from './number-converter.js';
import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <AggressiveClock />
        <NumberConverter />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));