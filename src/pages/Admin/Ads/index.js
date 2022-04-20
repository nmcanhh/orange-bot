import React from 'react';
import AdminLayout from '..';
import "./styles.scss";
import { AdminAdsAssets } from "../../../constants/assets.js"
import { Form, Input, Button, Checkbox, Menu, Dropdown, MenuProps } from 'antd';
import { PlusCircleOutlined, CalendarOutlined, CaretDownOutlined, SaveOutlined, DeleteOutlined } from "@ant-design/icons";


function Ads(props) {
    const emptyContent = () => {
        <div className="section__content--empty">
            <span>現在、この投稿のコンテンツはありません</span>
        </div>
    }

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
            <div className="page-wrapper">
                <div className="page-section">
                    <div className="page-section--left">
                        <div className="section__task--empty">
                            <img src={AdminAdsAssets.ADS_SEARCHING} alt="" />
                            <span className="section__task--empty__text">
                                まだ投稿はありません。 今すぐ投稿を作成しましょう！
                            </span>
                        </div>
                        <Button type="primary" htmlType="submit" size='large' block style={{ fontWeight: '500' }} icon={<PlusCircleOutlined />} className="section__task__create-button">
                            新規投稿作成
                        </Button>
                    </div>
                    <div className="page-section--right">
                        <div className="page-section--right__header">
                            <span className="page-section--right__header__title">
                                テーマ
                            </span>
                            <div className="page-section--right__header__action">
                                <span>スターテス</span>
                            </div>
                        </div>
                        <div className="section__content">
                            <div className="section__content--empty">
                                <span>現在、この投稿のコンテンツはありません</span>
                            </div>
                        </div>
                        <div className="page-section--right__bottom">
                            <div style={{ display: "inline-block" }}><Dropdown.Button icon={<CaretDownOutlined />} overlay={menu}> <CalendarOutlined />時間を選択</Dropdown.Button></div>
                            <div className="right__bottom__action" style={{ display: "inline-block" }}>
                                <Button htmlType="submit" size='large' block style={{ fontWeight: '500', width: "100%" }} icon={<DeleteOutlined />}>
                                    削除
                                </Button>
                                <Button type="primary" htmlType="submit" size='large' block style={{ fontWeight: '100', width: "100%" }} icon={<SaveOutlined />} >
                                    保存
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Ads;