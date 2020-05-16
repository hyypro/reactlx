import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, message } from 'antd'
import { loginAction } from '@/actions/login'
import './style.less'

export default @Form.create({

})
@connect(state => ({}),{
  loginAction
})
class Login extends Component {

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
       // console.log('Received values of form: ', values)
        this.props.loginAction(values)
        message.success('登录成功')
        this.props.history.push('/home')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('pwd', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
       </Form>
      </div>
    )
  }
}
