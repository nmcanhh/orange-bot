import React from 'react';
import { AdminAssets } from "../../../constants/assets.js"
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./styles.scss"

function Login(props) {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className='admin-login-container'>
            <div className='admin-login-logo'>
                <img src={AdminAssets.ORANGE_LOGO} alt="" className='admin-login-img' />
                <h1 className='admin-login-title'>OrangeBot</h1>
            </div>
            <div className='admin-login-form'>
                <h1 className='admin-login-name'>Đăng nhập</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <span className='admin-login-label'>Tài khoản</span>
                    <Form.Item
                        style={{ marginTop: "8px" }}
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tài khoản!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />} placeholder="Nhập tài khoản" size='large' />
                    </Form.Item>
                    <span className='admin-login-label'>Mật khẩu</span>
                    <Form.Item
                        style={{ marginTop: "8px" }}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                            type="password"
                            placeholder="Nhập mật khẩu"
                            size='large'
                        />
                    </Form.Item>
                    <Form.Item style={{ display: "display: flex", justifyContent: "space-between" }}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox><span className='admin-login-label'>Ghi nhớ mật khẩu</span></Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot admin-login-label" href="" style={{ color: '#1890FF' }}>
                            Quên mật khẩu
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button admin-login-button" size='large' block style={{ fontWeight: '500' }}>
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;