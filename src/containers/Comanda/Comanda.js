import React, { Component } from 'react'
import './Comanda.css'

import ComandaItem from 'components/ComandaItem/ComandaItem'

class Comanda extends Component {
  render () {
    return (
      <div className='Comanda container is-fluid'>
        <h1 className='title'>Comanda</h1>
        <h2 className='subtitle'>Lista de los alimentos de la orden</h2>
        <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
          <thead>
            <tr>
              <th><abbr title='Position'>Pos</abbr></th>
              <th>Team</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th><abbr title='Position'>Pos</abbr></th>
              <th>Team</th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <th>1</th>
              <th><ComandaItem /></th>
            </tr>
            <tr>
              <th>1</th>
              <th><ComandaItem /></th>
            </tr>
            <tr>
              <th>1</th>
              <th><ComandaItem /></th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Comanda
