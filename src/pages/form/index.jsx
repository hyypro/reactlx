import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Form,
  Select,
  Input,
  Button,
  Upload,
  Icon,
  message
} from 'antd'
import api from '@/services/api'
import { post } from '@/utils/request'


const { Option } = Select

const obj = {
  1: "男",
  2: "女"
}
export default @connect(({ table }) => ({
  data: table.data
}))

@Form.create({
  mapPropsToFields(props) {
  //  console.log(props.data)
    return {
      name: Form.createFormField({
        ...props.data,
        value: props.data.name,
      }),
      age: Form.createFormField({
        ...props.data,
        value: props.data.age,
      }),
      msg: Form.createFormField({
        ...props.data,
        value: props.data.msg,
      }),
      gender: Form.createFormField({
        ...props.data,
        value: obj[props.data.gender],
      })
    }
  }
})



class FormList extends Component {
 
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let hospital = values.hospital[0].response.url.split('/')[4]
        if(isNaN(this.props.data)) {
          post(api.update, {
            id: this.props.data.id,
            name: values.name,
            age: values.age,
            gender: values.gender,
            msg: values.msg,
            hospital
          }).then(res => {
            message.success(res.message)
          })
        } else {
          post(api.add, {
            name: values.name,
            age: values.age,
            gender: values.gender,
            msg: values.msg,
            hospital
          }).then(res => {      
            message.success(res.info)
          })
        }
      }
    })
  }

 
  normFile = e => {
    if (Array.isArray(e)) {
      return e.fileList;
    }
    return e && e.fileList; 
  }
 

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    return (
      <div className="form">
      <Form  {...formItemLayout}  onSubmit={this.handleSubmit}>
      <Form.Item {...formItemLayout} label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Age">
          {getFieldDecorator('age', {
            rules: [
              {
                required: true,
                message: 'Please input your age',
              },
            ],
          })(<Input placeholder="Please input your age" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Msg">
          {getFieldDecorator('msg', {
            rules: [
              {
                required: true,
                message: 'Please input your msg',
              },
            ],
          })(<Input placeholder="Please input your msg" />)}
        </Form.Item>
      <Form.Item label="Gender" hasFeedback>
        {getFieldDecorator('gender', {
          rules: [{ required: true, message: 'Please select your sex!' }],
        })(
          <Select placeholder="Please select a country">
            <Option value="1">男</Option>
            <Option value="2">女</Option>
          </Select>,
        )}
      </Form.Item>
  
      <Form.Item label="Upload" extra="">
      {getFieldDecorator('hospital', {
        valuePropName: `fileList[0].response.url`,
        getValueFromEvent: this.normFile,
      })(
        <Upload name="logo" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture">
          <Button>
            <Icon type="upload" /> Click to upload
          </Button>
        </Upload>,
      )}
    </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          { isNaN(this.props.data) ? '修改' : '添加'}
        </Button>
      </Form.Item>
    </Form>
      </div>
    )
  }
}


