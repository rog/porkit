import React, { Component } from 'react'

class Meal extends Component {
  render () {
    return (
      <div className='card'>
        <header className='card-header'>
          <p className='card-header-title'>Component</p>
        </header>
        <div className='card-image'>
          <figure className='image is-4by3'>
            <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder' />
          </figure>
        </div>
        <div className='card-content'>
          <div className='content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          </div>
        </div>
        <footer className='card-footer'>
          <button className='card-footer-item'>Save</button>
          <button className='card-footer-item'>Delete</button>
        </footer>
      </div>
    )
  }
}

export default Meal
