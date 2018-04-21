import React from 'react'
import ReactDOM from 'react-dom'
import Comanda from './Comanda'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Comanda />, div)
  ReactDOM.unmountComponentAtNode(div)
})
