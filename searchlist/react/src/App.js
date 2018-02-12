import React, { Component } from 'react'
import Search from './components/Search'
import Specs from './ui/Specs'
import './App.css'

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
