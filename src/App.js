import React, { Component } from 'react'
import './App.css'
import logo from './assets/logo.svg'

class App extends Component {
  constructor() {
    super()
    this.name = 'name'
    this.age = 9
  }

  onclick = () => {
    const a = 'xsjsdhjd'
    const b = `a${a}`
    console.log(b)
  }

  render() {
    return (
      <div className="App">
        <ddddddd />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <button onClick={this.onclick}>click!</button> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
