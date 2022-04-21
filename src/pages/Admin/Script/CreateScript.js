import React from 'react';
import {
    Modal, Tabs, Input
} from "antd";

import { AdminScriptAssets } from "../../../constants/assets.js"

function CreateScript(props) {
    const title = (
        <div className="script__modal-header">
            <img src={AdminScriptAssets.SCRIPT_MODAL_PLUS} alt="" className='script__modal--header__icon' />
            <span className="script__modal--header__text">スクリプトを作成する</span>
        </div>
    )
    const handleCancel = () => {
        props.handleClose();
    };

    return (
        <Modal
            title={title}
            visible={props.isOpen}
            onCancel={handleCancel}
            // footer={null}
            width="680px"
            style={{ top: 200 }}
            destroyOnClose
            maskClosable={true}
            keyboard={true}
            okText="確定"
            cancelText="キャンセル"
        >
            <div className="modal-wrapper">
                <div className="script-info">
                    <div className="script-info__input-section">
                        <span className='script-info__input-label'>シナリオ名</span>
                        <Input placeholder="シナリオ名をt入力してください" className='script-info__input' />
                        <span className='script-info__input-label'>タグ</span>
                        <Input placeholder="タグを入力ください" className='script-info__input' />
                    </div>
                    <div className="script-info__upload-image">
                        <span className="script-info__upload-image__text">アイコン</span>
                        <img src={AdminScriptAssets.SCRIPT_MODAL_UPLOAD} alt="" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                    </div>
                </div>
            </div>

        </Modal>
    );
}

export default CreateScript;