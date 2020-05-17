import React, { Component } from 'react'
import { Card } from 'antd'
import './style.less'

export default class index extends Component {
  render() {
    const { ele } = this.props
    return (
      <div className="card">
       
        <Card title={ele.title}  style={{ width: 300 }} >
          <p>{ele.tags}</p>
        </Card>
      </div>
    )
  }
}
