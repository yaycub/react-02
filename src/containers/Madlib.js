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
  
    // this.setState({ words: [target[0].value, target[1].value, target[2].value, target[3].value, target[4].value, target[5].value, target[6].value, target[7].value, target[8].value, target[9].value, target[10].value, target[11].value] });
    this.toggleResult();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
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
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />}
        {showResult && <Result words={words} closeResult={this.toggleResult} />}
      </>
    );
  }
}
