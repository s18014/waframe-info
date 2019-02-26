import React, { Component } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import AlertMain from './AlertMain'
import Footer from './Footer'

export default class AlertPage extends Component {
  render () {
    return (
      <div className='alert-page'>
        <Header />
        <Navbar />
        <AlertMain />
        <Footer />
      </div>
    )
  }
}
