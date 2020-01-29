import React, { Component } from 'react';
import Madlib from '../containers/Madlib';
import Header from './Header';

export default class App extends Component {
  

  render(){
    return (
      < >
        <Header title="Madlibz" />
        <Madlib /> 
      </>
    );
  }
}
