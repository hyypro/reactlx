import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Form, Button } from 'antd'
import { tablelist } from '@/actions/table'
import { changekeys } from '@/actions/home'
import './style.less'

export default @connect(({ table }) => ({
  users: table.users
}), {
  tablelist,
  changekeys
})
@Form.create({})
class Tables extends Component {
  
  componentDidMount () {
    this.props.tablelist()
  }

  onclick = () => {
    this.props.changekeys('2')
    this.props.history.push('/home/form')
    
  }
  

  render() {
    const columns = [
      {
        title: 'User',
        dataIndex: 'hospital',
        render: record => <img src={record} alt=""/>,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Msg',
        dataIndex: 'msg',
      }
    ]
    const { users } = this.props
    return (
      <div className="table">
      <Button type="primary" onClick={this.onclick} style={{ margin: '20px 0' }}>Add User</Button>
        <Table
         columns={columns} 
         dataSource={users} 
         rowKey={record => record.id}
        />
      </div>
    )
  }
}
