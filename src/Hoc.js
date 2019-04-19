/**
 * Hoc.js - Awesome project
 * Copyright 2019 delta
 * This is my license...
 */

import React, { Component } from 'react'

export default (WrappedComponent, name) => {
  class NewComponent extends Component {
    constructor() {
      super()
      this.state = { data: null }
    }

    componentWillMount() {
      localStorage.setItem('username', 'yyyy')
      let data = localStorage.getItem(name)
      this.setState({ data })
    }

    render() {
      return <WrappedComponent data={this.state.data} />
    }
  }
  return NewComponent
}
