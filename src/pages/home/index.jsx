import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Nav from '@@/Nav'
import { Chart, Sample, Form, Table } from '@/router/assembly'
import './style.less'

export default @connect(({ login }) => ({
  username: login.user_name
}))

class Home extends Component {
  render() {
  //  console.log(this.props.username)
  const { username } = this.props
    return (
      <div className="home">
          <div className="top">
            用户名: <span>{username}</span>
          </div>
          <div className="bot">
          <div className="botleft">
            <Nav />
          </div>
          <div className="botrig">
            <Route path="/home/chart" component={Chart}/>
            <Route path="/home/form" component={Form}/>
            <Route path="/home/tab" component={Table}/>
            <Route path="/home/sample" component={Sample}/>
            <Redirect to="/home/tab" />
          </div>
        </div>
      </div>
    )
  }
}
