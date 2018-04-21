import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <nav className='navbar is-black'>
        <div className='container is-fluid'>
          <div className='navbar-brand'>
            <a className='navbar-item is-size-3' href='https://bulma.io'>
              Pork <span role='img' aria-label='🍖'>🍖</span>  it
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
