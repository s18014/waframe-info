import React, { Component } from 'react'
const moment = require('moment')

export default class AlertBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: props.startDate,
      expiryDate: props.expiryDate,
      restTime: props.expiryDate - Date.now(),
      items: props.items,
      credits: props.credits,
      location: props.location,
      missionType: props.missionType,
      enemyType: props.enemyType,
      isNightmare: props.isNightmare,
      isArchwingReq: props.isArchwingReq,
      enemyLevel: props.enemyLevel,
      itemImg: props.itemImg
    }
    setInterval(() => {
      let newRestTime = (this.props.expiryDate - Date.now())
      if (newRestTime <= 0) newRestTime = 0
      this.setState({ restTime: newRestTime })
    }, 1000)
  }

  componentWillReciveProps (props) {
    this.setState({
      startDate: props.startDate,
      expiryDate: props.expiryDate,
      restTime: props.expiryDate - Date.now(),
      items: props.items,
      credits: props.credits,
      location: props.location,
      missionType: props.missionType,
      enemyType: props.enemyType,
      isNightmare: props.isNightmare,
      isArchwingReq: props.isArchwingReq,
      enemyLevel: props.enemyLevel,
      itemImg: props.itemImg
    })
  }

  getRestTime () {
    return Math.floor((this.state.expiryDate - Date.now()))
  }

  timeFormater (msec) {
    const date = new Date(msec)
    let hour = date.getUTCHours()
    let minutes = date.getUTCMinutes()
    let seconds = date.getUTCSeconds()
    const times = [hour, minutes, seconds].map((v) => {
      return ('0' + v).slice(-2)
    })
    return times.join(':')
  }

  render () {
    const restTime = (this.getRestTime() >= 0) ? this.timeFormater(this.getRestTime()) : '終了'
    const startDate = moment(this.state.startDate).format('YYYY/MM/DD HH:mm:ss')
    const expiryDate = moment(this.state.expiryDate).format('YYYY/MM/DD HH:mm:ss')
    return (
      <div className='alert-box'>
        <div className='alert-date'>
          <p>{startDate.toString()}</p>
          <p>{expiryDate.toString()}</p>
        </div>
        <div className='alert-detail'>
          <figure><img src={this.state.itemImg} alt='hoge' /></figure>
          <div className='alert-text-box'>
            <ul>
              <li><p className='item'>{this.state.items}</p></li>
              <li><p className='credits'>{this.state.credits}</p></li>
              <li><p className='location'>{this.state.location}</p></li>
              <li><p className='mission-type'>{this.state.missionType}</p></li>
              <li><p className='enemy-type'>{this.state.enemyType}</p></li>
              <li><p className='nightmare'>{this.state.isNightmare}</p></li>
              <li><p className='enemy-level'>{this.state.enemyLevel}</p></li>
            </ul>
          </div>
        </div>
        <div className='alert-rest-time'><p>{restTime}</p></div>
      </div>
    )
  }
}
