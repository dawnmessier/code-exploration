import React, { Component } from 'react'
import Search from '../components/Search'
import Specs from '../styled/Specs'
import '../css/App.css'

/*
    React file architecture
    - containers (access to data - API)
    - components (access to state, not data)
    - styled (no state or data access - props OK)
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Find a country</h1>
        </header>
        <main>
            <Search />
            <Specs />
        </main>
      </div>
    );
  }
}

export default App
