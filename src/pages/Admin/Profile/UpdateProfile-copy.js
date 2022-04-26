import "./styles.scss";
import AdminLayout from "..";
import { AdminSidebarAssets } from "../../../constants/assets";
import { EditOutlined } from '@ant-design/icons';
import { Button, Input, Tooltip, } from 'antd';
import { Row, Col } from 'antd';
import { DatePicker, Space } from 'antd';
import moment from 'moment';




function UpdateProfile(props) {
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    const dateFormat = 'YYYY/MM/DD';

    return (
        <AdminLayout>
            <div className="wrapper">
                <div className="section section--left">
                    <img src={AdminSidebarAssets.DEFAULT_AVATAR} alt="" className="section--left__avatar" />
                    <span className="section--left__text section--left__name">
                        <Input
                            defaultValue="Lalisa Manoban"
                        />
                    </span>
                    <span className="section--left__text section--left__dob">
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} onChange={onChange} style={{ width: '100%' }} />
                    </span>
                    <div className="section--left__button-group">
                        <Button type="link" danger>
                            Hủy bỏ
                        </Button>
                        <Button type="primary" className="section--left__button" icon={<EditOutlined />}>
                            Xác nhận
                        </Button>
                    </div>
                </div>
                <div className="section section--right">
                    <span className="section--right__title">Chi tiết</span>
                    <div className="section--right__email">
                        <span>Email</span>
                        <Input.Group compact className="section--right__input">
                            <Input
                                style={{ width: 'calc(100% - 32px)' }}
                                defaultValue="lalisamanoban"
                            />
                            <Tooltip title="Chỉnh sửa">
                                <Button icon={<EditOutlined />} />
                            </Tooltip>
                        </Input.Group>
                    </div>
                    <div className="section--right__password">
                        <span>Mật khẩu</span>
                        <Input.Password
                            defaultValue="1234567890"
                        />
                        <Row gutter="16" justify="space-between" className="section--right__re-password">
                            <Col span={12}>
                                <Input.Password
                                    defaultValue="1234567890"
                                />
                            </Col>
                            <Col span={12}>
                                <Input.Password
                                    defaultValue="1234567890"
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="section--right__button-group">
                        <Button type="link" danger>
                            Hủy bỏ
                        </Button>
                        <Button type="primary" className="section--right__button" icon={<EditOutlined />}>
                            Xác nhận
                        </Button>
                    </div>

                </div>
            </div>
        </AdminLayout >
    );
}

export default UpdateProfile;