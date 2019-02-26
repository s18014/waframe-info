import React, { Component } from 'react'
import AlertBox from './AlertBox'
const request = require('superagent')
const URL = 'https://api.warframestat.us/pc/alerts'
// const URL = './test.json'

export default class AlertBoxes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
    this.timerId = 0
  }

  componentDidMount () {
    this.getAlerts()
    this.timerId = setInterval(() => this.update(), 1000 * 60)
  }

  componentWillUnmount () {
    console.log('AlertBoxes unmounted')
    clearInterval(this.timerId)
  }

  update () {
    this.getAlerts()
  }

  getAlerts () {
    console.log('Getting source from ' + URL)
    request
      .get(URL)
      .end((err, res) => {
        if (err) {
          console.error(err)
          return
        }
        this.loadedJson(res.body)
      })
  }

  loadedJson (json) {
    if (!json) {
      console.log('no exist a json data')
      return
    }
    this.setState({ data: json })
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
      const items = data.mission.reward.itemString
      const credits = data.mission.reward.credits
      const location = data.mission.node
      const missionType = data.mission.type
      const enemyType = data.mission.faction
      const isNightmare = data.mission.nightmare
      const isArchwingReq = data.mission.archwingRequired
      const enemyLevel = data.mission.minEnemyLevel + ' ~ ' + data.mission.maxEnemyLevel
      const id = data.id
      return (
        <AlertBox
          key={id}
          startDate={Date.parse(startDate)}
          expiryDate={Date.parse(expiryDate)}
          items={items}
          credits={credits}
          location={location}
          missionType={missionType}
          enemyType={enemyType}
          isNightmare={isNightmare}
          isArchwingReq={isArchwingReq}
          enemyLevel={enemyLevel}
          itemImg={itemImg}
        />
      )
    })
    return boxes
  }

  render () {
    const boxes = this.makeBoxes()
    return (
      <div className='alert-boxes'>
        {boxes}
      </div>
    )
  }
}
