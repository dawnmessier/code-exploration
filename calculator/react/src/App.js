import React, { Component } from 'react';
import Calculator from './components/Calculator'
import Specs from './ui/Specs'
import {Main} from './styles/Calculator'
import './App.css';

class App extends Component {
  render() {
    return (
      <Main>
        <Calculator />
        <Specs />
      </Main>
    );
  }
}

export default App;
