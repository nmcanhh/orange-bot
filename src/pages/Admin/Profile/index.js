import "./styles.scss";
import AdminLayout from "..";
import { AdminSidebarAssets } from "../../../constants/assets";
import { EditOutlined } from '@ant-design/icons';
import { Button, Input, Tooltip, } from 'antd';
import { Link } from "react-router-dom";



function Profile(props) {



    return (
        <AdminLayout>
            <div id="profile">
                <div className="wrapper">
                    <div className="section section--left">
                        <div className="info-wrapper">
                            <img src={AdminSidebarAssets.DEFAULT_AVATAR} alt="" className="avatar" />
                            <span className="text text-name">Lalisa Manoban</span>
                            <span className="text text-dob">27 - 03 - 1997</span>
                        </div>
                        <div className="update-info__btn-wrapper">
                            <Link to="update">
                                <Button type="primary" className="update-info--btn" icon={<EditOutlined />}>
                                    編集
                                </Button>
                            </Link>

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
                                    <Tooltip title="編集"><Link to="update">
                                        <Button icon={<EditOutlined />} /></Link>
                                    </Tooltip>
                                </Input.Group>
                            </div>
                            <div className="form-input-wrapper">
                                <span className="form-input--label">Mật khẩu</span>
                                <Input.Group compact className="form-input__input">
                                    <Input.Password
                                        style={{ width: 'calc(100% - 32px)' }}
                                        defaultValue="1234567890"
                                    />
                                    <Tooltip title="編集"><Link to="update">
                                        <Button icon={<EditOutlined />} /></Link>
                                    </Tooltip>
                                </Input.Group>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Profile;