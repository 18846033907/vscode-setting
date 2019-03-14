import { Component, default as React } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();
    this.name = 'name';
    this.age = 9;
  }

  onclick = () => {
    console.log(this.name);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onclick={this.onclick}>click！</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
    );
  }
}

export default App;
