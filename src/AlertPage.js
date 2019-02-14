import react, { Component } from 'react'
import Header from 'Header'

export default class AlertPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div class='alert-page'>
        <Header />
      </div>
    )
  }
}
