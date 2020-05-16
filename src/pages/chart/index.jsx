import React, { Component } from 'react'
import Ech from '@@/echarts'
import './style.less'

export default class Chart extends Component {
  render() {
    return (
      <div className="chart">
        <Ech />
      </div>
    )
  }
}
