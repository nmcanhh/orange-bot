import "./styles.scss";
import AdminLayout from "../../Admin";
import { AdminSidebarAssets } from "../../../constants/assets";
import { EditOutlined } from '@ant-design/icons';
import { Button, Input, Tooltip, } from 'antd';

function User(props) {
    return (
        <AdminLayout>
            <div className="wrapper">
                <div className="section section--left">
                    <img src={AdminSidebarAssets.DEFAULT_AVATAR} alt="" className="section--left__avatar" />
                    <span className="section--left__text section--left__name">Lalisa Manoban</span>
                    <span className="section--left__text section--left__dob">27 - 03 - 1997</span>
                    <div className="section--left__button-group">
                        <Button type="primary" className="section--left__button" icon={<EditOutlined />}>
                            Chỉnh sửa
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
                        <Input.Group compact className="section--right__input">
                            <Input.Password
                                style={{ width: 'calc(100% - 32px)' }}
                                defaultValue="1234567890"
                            />
                            <Tooltip title="Chỉnh sửa">
                                <Button icon={<EditOutlined />} />
                            </Tooltip>
                        </Input.Group>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}

export default User;