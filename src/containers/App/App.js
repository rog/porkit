import React, { Component } from 'react'
import './App.css'

import Header from 'components/Header/Header'

import Menu from 'containers/Menu/Menu'
import Comanda from 'containers/Comanda/Comanda'
import ComandaList from 'containers/ComandaList/ComandaList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <ComandaList />
      </div>
    )
  }
}

export default App
