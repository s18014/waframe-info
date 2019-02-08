import React, { Component } from 'react'
import getWorldState from './getWorldState'

export default class Test extends Component {
  constructor (props) {
    super(props)
    this.state = {
      worldState: null
    }
  }

  componentWillMount () {
    this.reloadWorldState()
  }

  reloadWorldState () {
    getWorldState((data) => {
      if (data) {
        this.setState({
          worldState: data
        })
      }
    })
  }

  render () {
    const datas = this.state.worldState
    if (!datas) {
      return (
        <div>
          <p>読み込み中...</p>
        </div>
      )
    }
    const alerts = datas['alerts']
    console.log(typeof alerts)
    const alertsBoxes = alerts.map((e, index) => {
      const reward = e['mission']['reward']
      const item = reward['items'][0]
      const credit = reward['credits'] + 'cr'
      const countedItems = reward['countedItems'][0]
      let asString = ' + '
      if (countedItems) {
        asString += countedItems['count'] + ' ' + countedItems['type']
      } else if (item) {
        asString += item
      } else {
        asString = ''
      }
      const img = reward['thumbnail']

      return (
        <div key={index}>
          <li><img src={img} width='20%' height='20%' />{credit + asString}</li>
        </div>
      )
    })
    return (
      <div>
        <ul>{alertsBoxes}</ul>
      </div>
    )
  }
}
