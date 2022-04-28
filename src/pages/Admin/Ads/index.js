import { CalendarOutlined, CaretDownOutlined, DeleteOutlined, PlusCircleOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import AdminLayout from '..';
import { AdminAdsAssets } from "../../../constants/assets.js";
import "./styles.scss";


function Ads(props) {
    const emptyContent = (<div className="empty-content">
        <span>現在、この投稿のコンテンツはありません</span>
    </div>)


    const onMenuClick = (e) => {
        console.log('click', e);
    };

    const menu = (
        <Menu
            onClick={onMenuClick}
            items={[
                {
                    key: '1',
                    label: '1st item',
                },
                {
                    key: '2',
                    label: '2nd item',
                },
                {
                    key: '3',
                    label: '3rd item',
                },
            ]}
        />
    );

    return (
        <AdminLayout>
            <div id="ads">
                <div className="wrapper">
                    <div className="section">
                        <div className="section--left">
                            <div className="task-empty">
                                <img src={AdminAdsAssets.ADS_SEARCHING} alt="" />
                                <span className="task-empty--text">
                                    まだ投稿はありません。 今すぐ投稿を作成しましょう！
                                </span>
                            </div>
                            <Button type="primary"
                                htmlType="submit"
                                size='large'
                                block style={{ fontWeight: '500' }}
                                icon={<PlusCircleOutlined />}
                                className="task-create--btn">
                                新規投稿作成
                            </Button>
                        </div>
                        <div className="section--right">
                            <div className="header-wrapper">
                                <span className="header-title">
                                    テーマ
                                </span>
                                <div className="header-action">
                                    <span>スターテス</span>
                                </div>
                            </div>
                            <div className="typing-content">
                                <div className="empty-content">
                                    <span>現在、この投稿のコンテンツはありません</span>
                                </div>
                            </div>
                            <div className="bottom">
                                <div style={{ display: "inline-block" }}><Dropdown.Button icon={<CaretDownOutlined />} overlay={menu}> <CalendarOutlined />時間を選択</Dropdown.Button></div>
                                <div className="right__bottom__action" style={{ display: "inline-block" }}>
                                    <Button type="primary" htmlType="submit" size='large' block style={{ fontWeight: '100', width: "100%" }} icon={<SaveOutlined />} >
                                        保存
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Ads;