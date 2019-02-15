import React, { Component } from 'react'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'WARFRAME INFO'
    }
  }

  render () {
    return (
      <header>
        <div className='container'>
          <div className='header-inner'>
            <h1>{this.state.title}</h1>
          </div>
        </div>
      </header>
    )
  }
}
