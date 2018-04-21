import React, { Component } from 'react'

class ComandaItem extends Component {
  render () {
    return (
      <div className='media'>
        <figure className='media-left'>
          <p className='image is-128x128'>
            <img src='https://bulma.io/images/placeholders/128x128.png' />
          </p>
        </figure>
        <div className='media-content'>
          <div className='content'>
            <p>
              <strong>John Smith</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ComandaItem
