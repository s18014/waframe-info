import React, { Component } from 'react'
import AlertBoxes from './AlertBoxes'

export default class AlertMain extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentWillMount () {
  }

  render () {
    return (
      <section>
        <div className='container'>
          <main>
            <div className='main-inner'>
              <AlertBoxes />
            </div>
          </main>
        </div>
      </section>
    )
  }
}
