import React, { Component } from 'react'
import { Pagination  } from 'antd'
import axios from 'axios'
import qs from 'qs'
import api from '@/services/api'
import Card from '@@/Card'
import './style.less'

export default class Sample extends Component {
  state = {
    total: '',
    data: []
  } 
  
  componentDidMount () {
    this.list(1)
  }

  list = (cur) => {
    axios.post(api.listPage, qs.stringify({page: cur})).then(res => {
      this.setState({
        data: res.data.result.list,
        total: Number(res.data.result.count)
      })
    })
  }

  onChange = eve => {
    this.list(eve)
  }

  render() {
    const { total, data } = this.state
    return (
      <div className="sample">
        <div className="tops">
        { 
          data.map(ele => {
            return (
              <div className="box">
                <Card ele={ele}/>
              </div>
            )
          })
        }
        </div>
        <div className="bots">
           <Pagination  defaultCurrent={1} total={total} onChange={this.onChange}/>
        </div>
      </div>
    )
  }
}
