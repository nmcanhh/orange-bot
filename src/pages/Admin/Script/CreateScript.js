import { Form, Input, Modal, Select } from "antd";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AdminScriptAssets } from "../../../constants/assets.js";

const EditableContext = React.createContext(null);

const { Option } = Select;

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

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

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

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
                        <Select mode="tags" style={{ width: '100%', color: "#FA8C16", backgroundColor: "#FFF7E6 !important" }}
                            onChange={handleChange}
                            tokenSeparators={[',']}
                            placeholder="タグを入力ください"
                            className='script-info__selector'
                        >
                            {children}
                        </Select>
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