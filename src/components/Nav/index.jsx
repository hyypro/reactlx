import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { changekeys } from '@/actions/home'
import { Menu, Icon } from 'antd'



const { SubMenu } = Menu

export default @withRouter
@connect(({ home }) => ({
  keys: home.keys}), {
    changekeys
  })
class index extends Component {
  onChange = (text) =>{
    this.props.changekeys(text.key)
  }
  render() {
    const { keys } = this.props
    return (
      <div>
          <Menu
          style={{ width: 200, height: 887 }}
          selectedKeys={[`${keys}`]}
          mode={"inline"}
          onSelect={this.onChange}
        >
          <Menu.Item key="1">
            <NavLink to="/home/chart">
              <Icon type="pie-chart" />
              Chart
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/home/form">
              <Icon type="mail" />
              Form
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/home/tab">
              <Icon type="calendar" />
              Table
            </NavLink>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>Sample Pages</span>
              </span>
            }
          >
            <Menu.Item key="4">
            <NavLink to="/home/sample">pages</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
