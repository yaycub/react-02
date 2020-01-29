import React, { Component } from 'react';
import Madlib from '../containers/Madlib';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  

  render(){
    return (
      < >
        <Header title="Madlibz" />
        <Madlib /> 
        <Footer /> 
      </>
    );
  }
}
