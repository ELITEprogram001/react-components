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
    const hour = this.state.date.getHours() % 12 === 0 ? 12 : this.state.date.getHours() % 12;
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
      <div class='clock'>
        <svg viewBox="-85 -85 170 170" width='170' height='170'>
          <circle cx="0" cy="0" r="80" stroke="black" fill="transparent" stroke-width="4" />
          <line x1={0} y1={80} x2={0} y2={70} stroke="black" stroke-width="3" />
          <line x1={0} y1={-80} x2={0} y2={-70} stroke="black" stroke-width="3" />
          <line x1={80} y1={0} x2={70} y2={0} stroke="black" stroke-width="3" />
          <line x1={-80} y1={0} x2={-70} y2={0} stroke="black" stroke-width="3" />

          <line x1={80 * Math.sin(Math.PI / 6)} y1={80 * Math.cos(Math.PI / 6)} x2={75 * Math.sin(Math.PI / 6)} y2={75 * Math.cos(Math.PI / 6)} stroke="black" stroke-width="2" />
          <line x1={80 * Math.sin(Math.PI / 3)} y1={80 * Math.cos(Math.PI / 3)} x2={75 * Math.sin(Math.PI / 3)} y2={75 * Math.cos(Math.PI / 3)} stroke="black" stroke-width="2" />
          <line x1={80 * Math.sin(Math.PI * 4 / 3)} y1={80 * Math.cos(Math.PI * 4 / 3)} x2={75 * Math.sin(Math.PI * 4 / 3)} y2={75 * Math.cos(Math.PI * 4 / 3)} stroke="black" stroke-width="2" />
          <line x1={80 * Math.sin(Math.PI * 5 / 6)} y1={80 * Math.cos(Math.PI * 5 / 6)} x2={75 * Math.sin(Math.PI * 5 / 6)} y2={75 * Math.cos(Math.PI * 5 / 6)} stroke="black" stroke-width="2" />

          <line x1={-80 * Math.sin(Math.PI / 6)} y1={80 * Math.cos(Math.PI / 6)} x2={-75 * Math.sin(Math.PI / 6)} y2={75 * Math.cos(Math.PI / 6)} stroke="black" stroke-width="2" />
          <line x1={-80 * Math.sin(Math.PI / 3)} y1={80 * Math.cos(Math.PI / 3)} x2={-75 * Math.sin(Math.PI / 3)} y2={75 * Math.cos(Math.PI / 3)} stroke="black" stroke-width="2" />
          <line x1={-80 * Math.sin(Math.PI * 4 / 3)} y1={80 * Math.cos(Math.PI * 4 / 3)} x2={-75 * Math.sin(Math.PI * 4 / 3)} y2={75 * Math.cos(Math.PI * 4 / 3)} stroke="black" stroke-width="2" />
          <line x1={-80 * Math.sin(Math.PI * 5 / 6)} y1={80 * Math.cos(Math.PI * 5 / 6)} x2={-75 * Math.sin(Math.PI * 5 / 6)} y2={75 * Math.cos(Math.PI * 5 / 6)} stroke="black" stroke-width="2" />

          <line x1={0} y1={0} x2={0} y2={-60} stroke-width="2" transform={`rotate(${(this.state.date.getSeconds() - 1) * 6})`} strokeLinecap="round" stroke="red" />
          <line x1={0} y1={0} x2={0} y2={-65} stroke="black" stroke-width="3" transform={`rotate(${(this.state.date.getMinutes()) * 6})`} strokeLinecap="round" />
          <line x1={0} y1={0} x2={0} y2={-40} stroke="black" stroke-width="4" transform={`rotate(${(this.state.date.getHours() % 12) * 30 + (this.state.date.getMinutes() / 2)})`} strokeLinecap="round" />

          <circle cx="0" cy="0" r="2" stroke="black" fill="transparent" />
        </svg>
        <h3>{this.state.time}</h3>
      </div>
    );
  }
}

ReactDOM.render(<AggressiveClock />, document.getElementById('root'));