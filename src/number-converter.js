import React from 'react';

class NumberConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: 10,
      input: '',
    };

    this.handleBaseChange = this.handleBaseChange.bind(this);
  }

  handleBaseChange(num, base) {
    this.setState({
      input: num,
      base,
    });
  }

  render() {
    const currentBase = this.state.base;
    const currentInput = this.state.input;
    let dec = currentBase === 10 ? currentInput : tryConvert(currentInput, currentBase, convertToDecimal);
    let bin = currentBase === 2 ? currentInput : tryConvert(currentInput, currentBase,  convertToBinary);

    return (
      <div className='top-right'>
        <h3>Binary/Decimal Quick Converter:</h3>
        <NumberInput base={10} onChangeHandler={this.handleBaseChange} numberInput={dec} />
        <NumberInput base={2} onChangeHandler={this.handleBaseChange} numberInput={bin} />
      </div>
    );
  }
}

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChangeHandler(e.target.value, this.props.base);
  }

  render() {
    const input = this.props.numberInput;
    return (
      <div>
        <label htmlFor='decimal-input'>Base {this.props.base}: </label>
        <input type="text" value={input} 
               onChange={this.handleChange}></input>
      </div>
    );
  }
}

function reverseString(str) {
  let result = '';
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function tryConvert(num, base, toFunc) {
  if(!isValidInput(num, base)) {
    return '';
  }
  return toFunc(num);
}

function isValidInput(input, base) {
  switch(base) {
    case 2:
      return /^[0-1]*$/.test(input);
    case 10: 
      return /^[0-9]*$/.test(input);
    default:
      return false;
  }
}

function convertToBinary(num) {
  let result = '';
  while (num >= 1) {
    let remainder = num % 2;
    if(remainder) {
      result += remainder;
    } else {
      result += 0;
    }
    num = Math.trunc(num / 2);
  }
  return reverseString(result);
}

function convertToDecimal(num) {
  let result = 0;
  for(let i = num.length - 1, j = 0; i >= 0; i--, j++) {
    result += Math.pow(2, j) * num[i];
  }
  return result;
}

export default NumberConverter;