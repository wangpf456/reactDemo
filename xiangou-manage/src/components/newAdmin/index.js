import React, { Component } from 'react'
import { exitConfirm } from '../../utils/common'
import {
    Form,
    Select,
    Input,
    Button,
} from 'antd'

const { Option } = Select

class NFrom extends Component {

    handleSubmit = e => {
        e.preventDefault();
    };
    handleSelectChange = value => {
        // console.log(value);
        // this.props.form.setFieldsValue({
        //     note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        // });
    };

    render() {
        return (
            <div>
                <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14, offset: 1 }} onSubmit={this.handleSubmit}>
                    <Form.Item label="管理员编号：">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="账号：">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="密码：">
                    <Input/>
                    </Form.Item>
                    <Form.Item label="姓名：">
                    <Input/>
                    </Form.Item>
                    <Form.Item label="手机号：">
                    <Input/>
                    </Form.Item>
                    <Form.Item label="角色：">
                        <Select style={{ width: 206 }} onChange={this.handleSelectChange}>
                            <Option value="superManager">超级管理员</Option>
                            <Option value="shareManager">分享管理员</Option>
                            <Option value="ordinaryManager">普通管理员</Option>
                        </Select>
                    </Form.Item>
                    <br />
                    <Form.Item wrapperCol={{ span: 12, offset: 7 }}>
                        <Button type="primary" htmlType="submit">
                            确定
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button onClick={() => exitConfirm()}>
                            退出
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const NewAdmin = Form.create({ name: 'NewAdmin_Form' })(NFrom)
export default NewAdmin