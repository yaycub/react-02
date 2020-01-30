import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = () => {
    event.preventDefault();
    this.toggleResult();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleClear = () => {
    document.getElementById('wordForm').reset();
  }

  render() {
    const { showResult } = this.state;
    const word = this.state;
    
    let words = [];
    for(let i = 0; i < 13; i++){
      words.push(word[i]);
    }

    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.handleChange} onClear={this.handleClear} />}
        {showResult && <Result words={words} closeResult={this.toggleResult} />}
      </>
    );
  }
}
