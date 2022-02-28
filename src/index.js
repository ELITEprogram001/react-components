import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class AggressiveClock extends React.Component {
  // state is similar to props, but it is private and managed by only the component.
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      time: '',
      unusedTestingValue: NaN
    };
  }

  // Called whenever the component is mounted (AKA rendered in the DOM for the first time).
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.updateCurrentTimeString();
    }, 1000);
  }

  // Called whenever the component is removed from the DOM.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  formatTwoDigits(num) {
    if( num < 10 ) {
      return '0' + num;
    }
    return num;
  }

  updateCurrentTimeString() {
    const hour = this.state.date.getHours() % 12 == 0 ? 12 : this.state.date.getHours() % 12;
    const minute = this.formatTwoDigits(this.state.date.getMinutes());
    const second = this.formatTwoDigits(this.state.date.getSeconds());
    this.setState({
      date: new Date(),
      time: `${hour}:${minute}:${second}`
    });
  }

  render() {
    // Class assignment doesn't work here since div is not a grid child in the root
    //  fixed by making the #root a grid parent.
    return (
      <div class='bot-left'>
        <h1>Hurry!</h1>
        <h3>It's already {this.state.time}!</h3>
      </div>
    );
  }
}

ReactDOM.render(<AggressiveClock />, document.getElementById('root'));