import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Form, Button, Progress } from 'antd'
import { post } from '@/utils/request'
import api from '@/services/api'
import { tablelist, updateJson } from '@/actions/table'
import { changekeys } from '@/actions/home'
import './style.less'

export default @connect(({ table }) => ({
  users: table.users
}), {
  tablelist,
  changekeys,
  updateJson
})
@Form.create({})
class Tables extends Component {
  
  componentDidMount () {
    this.props.tablelist()
  }

  onclick = () => {
    this.props.changekeys('2')
    this.props.history.push('/home/form')
    this.props.updateJson([])
    
  }

  upDate = text => {
   // console.log(text)
   this.props.updateJson(text)
   this.props.changekeys('2')
   this.props.history.push('/home/form/1')
  }
  
  Delete = keyword => {
    console.log()
    post(api.delete, {id: keyword}).then(res => {
     console.log(res);
     this.props.tablelist()
     
    })
  }
  
  render() {
    const columns = [
      {
        title: 'User',
        dataIndex: 'hospital',
        render: text => {
          return (
            <div>
             <img src={`https://zos.alipayobjects.com/rmsportal/${text}`} alt="" className="img"/>
            </div>
          )
        },
      },
      {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        render: record =>  {
          return (
            <div>
            <Progress percent={Number(record)}/>
            </div>
          )
        }
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        
      },
      {
        title: 'Msg',
        dataIndex: 'msg',
      },{
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: text => {
          return (
            <div>
              <Button onClick={() => this.upDate(text)} style={{ margin: "0 10px" }}>Update</Button>
              <Button onClick={() => this.Delete(text.id)}>Delete</Button>
            </div>
          )
        },
      }
    ]
    const { users } = this.props
    //console.log(users)
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
