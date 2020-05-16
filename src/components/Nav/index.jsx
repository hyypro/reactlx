import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd'



const { SubMenu } = Menu

export default class index extends Component {
  render() {
    return (
      <div>
          <Menu
          style={{ width: 200, height: 887 }}
          defaultSelectedKeys={['3']}
          mode={"inline"}
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
