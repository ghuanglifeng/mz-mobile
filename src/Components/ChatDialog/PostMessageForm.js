import React from 'react';
import { List, InputItem,TextareaItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import EmojiPicker from 'emoji-picker-react';

class PostMessageForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.appendChatMessage('admin', values.msgcontent);
                this.props.form.resetFields();
            }
        });
    }
    render() {
        let errors;
        const { getFieldProps, getFieldError } = this.props.form;
        const customNames={
            people: '人物',
            foods: '食物',
            nature: '自然',
            activity: '活动',
            objects: '物体',
            places: '位置',
            flags: '标记',
            symbols: '符号'
        };
        return (
            <List>
                <div>
                    <TextareaItem
                        {...getFieldProps('msgcontent', {
                            initialValue: '',
                            rules: [{required: true}],
                        })}
                        rows={5}
                        count={100}
                        clear
                        placeholder='请输入消息内容...'
                    />
                    {/* <EmojiPicker customCategoryNames={customNames} disableDiversityPicker /> */}
                    <Button style={{ marginTop: 20, marginBottom: 5 }} type="primary" onClick={this.handleSubmit}>发送</Button>
                </div>
            </List>
        );
    }
}

export default createForm()(PostMessageForm);