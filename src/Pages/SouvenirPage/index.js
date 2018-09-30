import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import "./index.css";

class SouvenirPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  handleClick = () => {
    console.log(1);
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => '订单'}>
          <InputItem
            {...getFieldProps('bankCard', {
              initialValue: '8888 8888 8888 8888',
            }) }
          >商品编号</InputItem>
          <InputItem
            {...getFieldProps('phone') }
            type="phone"
            placeholder="186 1234 1234"
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('password') }
            type="password"
            placeholder="****"
          >密码</InputItem>
          <InputItem
            {...getFieldProps('number') }
            type="number"
            placeholder="click to show number keyboard"
          >数字键盘</InputItem>
        </List>
        <Button onClick={this.handleClick}>提交</Button>
      </div>
    );
  }
}
const FormedSouvenirPage = createForm()(SouvenirPage);
export default FormedSouvenirPage;
