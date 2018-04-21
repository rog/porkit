import React, { Component } from 'react'
import './ComandaList.css'

import Order from 'components/Order/Order'

class Comanda extends Component {
  render () {
    return (
      <div className='ComandaList container is-fluid'>
        <h1 className='title'>Comandas</h1>
        <h2 className='subtitle'>Comandas registradas</h2>
        <div className='tile is-ancestor'>
          <div className='tile is-12 is-parent'>
            <div className='tile is-child box'>
              <Order />
            </div>
            <div className='tile is-child box'>
              <Order />
            </div>
            <div className='tile is-child box'>
              <Order />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comanda
