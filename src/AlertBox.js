import React, { Component } from 'react'
import noImg from './img/noimage.png'
const moment = require('moment')

export default class AlertBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      restTime: props.expiryDate - Date.now()
    }
    this.timerId = 0
  }

  componentDidMount () {
    this.timerId = setInterval(() => {
      let newRestTime = (this.props.expiryDate - Date.now())
      if (newRestTime <= 0) newRestTime = 0
      this.setState({ restTime: newRestTime })
    }, 1000)
  }

  componentWillUnmount () {
    console.log('AlertBox unmounted')
    clearInterval(this.timerId)
  }

  componentDidReciveProps (props) {
    this.setState({
      restTime: props.expiryDate - Date.now()
    })
  }

  getRestTime () {
    return Math.floor((this.props.expiryDate - Date.now()))
  }

  timeFormater (ms) {
    let h = Math.floor(ms / 1000 / 60 / 60)
    let min = Math.floor((ms - h * 1000 * 60 * 60) / 1000 / 60)
    let sec = Math.floor((ms - h * 1000 * 60 * 50 - min * 1000 * 60) / 1000)
    const times = [h, min, sec].map((v) => {
      return ('0' + v).slice(-2)
    })
    return times.join(':')
  }

  render () {
    const restTime = (this.getRestTime() >= 0) ? '残り ' + this.timeFormater(this.getRestTime()) : '終了'
    const startDate = moment(this.props.startDate).format('[開始 ]YYYY/MM/DD HH:mm:ss')
    const expiryDate = moment(this.props.expiryDate).format('[終了 ]YYYY/MM/DD HH:mm:ss')
    const img = (this.props.itemImg) ? this.props.itemImg : noImg
    return (
      <div className='alert-box'>
        <div className='alert-date'>
          <p>{startDate.toString()}</p>
          <p>{expiryDate.toString()}</p>
        </div>
        <div className='alert-detail'>
          <figure><img src={img} alt='Items' /></figure>
          <div className='alert-text-box'>
            <ul>
              <li><p className='item'>{this.props.items}</p></li>
              <li><p className='credits'>{this.props.credits}</p></li>
              <li><p className='location'>{this.props.location}</p></li>
              <li><p className='mission-type'>{this.props.missionType}</p></li>
              <li><p className='enemy-type'>{this.props.enemyType}</p></li>
              <li><p className='nightmare'>{this.props.isNightmare}</p></li>
              <li><p className='enemy-level'>{this.props.enemyLevel}</p></li>
            </ul>
          </div>
        </div>
        <div className='alert-rest-time'><p>{restTime}</p></div>
      </div>
    )
  }
}
