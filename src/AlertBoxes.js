import React, { Component } from 'react'
import AlertBox from './AlertBox'
const request = require('superagent')
const URL = 'https://api.warframestat.us/pc/alerts'
const getAlerts = (callback) => {
  console.log('Getting source from ' + URL)
  request
    .get(URL)
    .end((err, res) => {
      if (err) {
        console.error(err)
        return
      }
      callback(res.body)
    })
}

export default class AlertBoxes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentWillMount () {
    getAlerts((data) => {
      if (!data) return
      this.setState({ data: data })
    })
  }

  makeBoxes () {
    if (!this.state.data) {
      return (
        <p>読み込み中...</p>
      )
    }
    const boxes = this.state.data.map((data, index) => {
      const startDate = data.activation
      const expiryDate = data.expiry
      const itemImg = data.mission.reward.thumbnail
      return (
        <AlertBox
          key={index}
          startDate={Date.parse(startDate)}
          expiryDate={Date.parse(expiryDate)}
          items='hoge'
          credits='hoge'
          location='hoge'
          missionType='hoge'
          enemyType='hoge'
          isNightmare='hoge'
          isArchwingReq='hoge'
          enemyLevel='hoge'
          itemImg={itemImg}
        />
      )
    })
    return boxes
  }

  render () {
    return (
      <div className='alert-boxes'>
        {this.makeBoxes()}
      </div>
    )
  }
}
