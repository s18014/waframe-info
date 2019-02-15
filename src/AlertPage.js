import React, { Component } from 'react'
import Header from './Header'
import AlertMain from './AlertMain'

export default class AlertPage extends Component {
  render () {
    return (
      <div className='alert-page'>
        <Header />
        <AlertMain />
      </div>
    )
  }
}
