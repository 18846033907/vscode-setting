import React, { Component } from 'react'
import wrapWithLoadData from './Hoc'

class App extends Component {
  render() {
    console.log(this.props.data)
    return <input value={this.props.data} />
  }
}

App = wrapWithLoadData(App, 'username')
export default App
