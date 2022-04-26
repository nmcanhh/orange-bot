import "./styles.scss";
import AdminLayout from "..";
import { AdminSidebarAssets } from "../../../constants/assets";
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import {
    Button, Input, Tooltip, Row,
    Col,
    DatePicker,
    Space
} from 'antd';
import moment from 'moment';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateProfile(props) {
    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    const dateFormat = 'YYYY/MM/DD';

    let navigate = useNavigate();

    return (
        <AdminLayout>
            <div id="profile">
                <div className="wrapper">
                    <div className="section section--left">
                        <div className="info-wrapper">
                            <img src={AdminSidebarAssets.DEFAULT_AVATAR} alt="" className="avatar" />
                            <Input
                                defaultValue="Lalisa Manoban"
                            />
                            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} onChange={onChange} style={{ width: '100%' }} />
                        </div>
                        <div className="section--left__button-group">
                            <Button type="link" danger onClick={() => navigate(-1)}>
                                キャンセル
                            </Button>
                            <Button type="primary" className="section--left__button" icon={<SaveOutlined />}>
                                保存
                            </Button>
                        </div>
                    </div>
                    <div className="section section--right">
                        <span className="section--right__title">Chi tiết</span>
                        <div className="form-wrapper">
                            <div className="form-input-wrapper">
                                <span className="form-input--label">Email</span>
                                <Input.Group compact className="form-input__input">
                                    <Input
                                        style={{ width: 'calc(100% - 32px)' }}
                                        defaultValue="lalisamanoban"
                                    />
                                    <Tooltip title="編集">
                                        <Button icon={<EditOutlined />} />
                                    </Tooltip>
                                </Input.Group>
                            </div>
                            <div className="form-input-wrapper">
                                <span className="form-input--label">Mật khẩu</span>
                                <Input.Group compact className="form-input__input">
                                    <Input.Password
                                        style={{ width: 'calc(100%)' }}
                                        defaultValue="1234567890"
                                    />
                                </Input.Group>
                                <Row gutter="16" justify="space-between" className="form-input__re-password">
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
                            <div className="btn-group">
                                <Button type="link" danger onClick={() => navigate(-1)}>
                                    キャンセル
                                </Button>
                                <Button type="primary" className="right-button" icon={<SaveOutlined />}>
                                    保存
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AdminLayout >
    );
}

export default UpdateProfile;