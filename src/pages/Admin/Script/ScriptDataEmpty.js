import React, { useState } from 'react';
import "./styles.scss";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { AdminAdsAssets } from "../../../constants/assets.js"
import CreateScript from './CreateScript';

function ScriptDataEmpty(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div className="page-body">
            <div className="script-content--empty">
                <img src={AdminAdsAssets.ADS_SEARCHING} alt="" />
                <span className='script-content--empty__text' >まだシナリオはありません <br /> 今すぐシナリオを作成しましょう！</span>
                <Button type="primary" htmlType="submit" size='large'
                    block style={{ fontWeight: '500' }} icon={<PlusCircleOutlined />}
                    className="script-content--empty__create-button"
                    onClick={openModal}
                >
                    新しいシナリオを作成する
                </Button>{isModalVisible === true ? (
                    <CreateScript
                        isOpen={isModalVisible}
                        handleClose={() => setIsModalVisible(false)}
                    />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default ScriptDataEmpty;