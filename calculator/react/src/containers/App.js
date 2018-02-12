import React, { Component } from 'react';
import Calculator from '../components/Calculator'
import Specs from '../styled/Specs'
import {Main} from '../css/Calculator'
import '../css/App.css';

/*
    React file architecture
    - containers (access to data - API)
    - components (access to state, not data)
    - styled (no state or data access - props OK)
*/

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
