import React, { Component } from 'react'
import './App.css'

import Meal from 'components/Meal/Meal'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <nav className='navbar is-black'>
          <div className='container is-fluid'>
            <div className='navbar-brand'>
              <a className='navbar-item is-size-3' href='https://bulma.io'>
                Pork <span role='img' aria-label='🍖'>🍖</span>  it
              </a>
            </div>
          </div>
        </nav>
        <div className='container is-fluid'>
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
      </div>
    )
  }
}

export default App
