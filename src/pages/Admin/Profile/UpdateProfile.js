import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import {
    Button, Col,
    DatePicker, Input, Row, Tooltip
} from 'antd';
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import AdminLayout from "..";
import { AdminSidebarAssets } from "../../../constants/assets";
import "./styles.scss";

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
                        <span className="section--right__title">詳細</span>
                        <div className="form-wrapper">
                            <div className="form-input-wrapper">
                                <span className="form-input--label">電子メールアドレス</span>
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
                                <span className="form-input--label">パスワード</span>
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