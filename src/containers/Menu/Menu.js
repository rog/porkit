import React, { Component } from 'react'
import './Menu.css'

import Meal from 'components/Meal/Meal'

class App extends Component {
  render () {
    return (
      <div className='Menu container is-fluid'>
        <h1 className='title'>Menú</h1>
        <h2 className='subtitle'>Selecciona los alimentos que deseas ordenar</h2>
        <div className='columns'>
          <div className='column'>
            <Meal />
          </div>
          <div className='column'>
            <Meal />
          </div>
          <div className='column'>
            <Meal />
          </div>
          <div className='column'>
            <Meal />
          </div>
        </div>
      </div>
    )
  }
}

export default App
