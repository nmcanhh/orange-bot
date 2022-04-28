import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Table, Tag } from "antd";
import dateFormat from "dateformat";
import React, { useEffect, useState } from 'react';
import { AdminScriptAssets } from "../../../constants/assets.js";
import { listScript } from "../../../constants/list-script.js";



function ScriptDataTable(props) {
    const [alreadySelectedRows, setAlreadySelectedRows] = useState([]);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const getRow = (listScript) => {
            return listScript?.map((row) => ({
                key: row.id,
                id: row.id,
                name: row.name,
                imageScript: row.imageScript,
                user: row.user,
                createdAt: row.createdAt,
                updatedAt: row.updatedAt,
                label: row.label,
            }));
        };
        setDataSource(getRow(listScript));
    }, [listScript]);


    const columns = [
        {
            title: "シナリオ名",
            dataIndex: "name",
            width: "18rem",
            align: "left",
            render: (name, record) => {
                return (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={record.imageScript !== null ? record.imageScript : AdminScriptAssets.SCRIPT_TABLE_IMAGE_NULL} alt="" className="script-table__image" />
                        <span>{name}</span>
                    </div>
                );
            },
        },
        {
            title: "作成者",
            dataIndex: "user",
            width: "24rem",
            align: "left",
            render: (user, record) => (
                <div>
                    <span>{user}</span>
                </div>
            ),
        },
        {
            title: "作成日",
            dataIndex: "createdAt",
            width: "24rem",
            align: "left",
            render: (createdAt) => (
                <div>
                    <span>{dateFormat(
                        new Date(createdAt),
                        "yyyy/mm/dd"
                    )}</span>
                </div>
            ),
        },
        {
            title: "タグ",
            dataIndex: "label",
            width: "22rem",
            align: "left",
            render: (label) => (
                <div>
                    <span>
                        {label.map(item => {
                            return (<Tag color="orange">#{item}</Tag>);

                        })}
                    </span>
                </div>
            ),
        },
        {
            title: <DeleteOutlined />,
            dataIndex: "18rem",
            align: "center",
            render: (record) => {
                return (
                    <div><p>消去</p></div>
                );
            },
        },
    ];

    return (
        <div className="script-data__body">
            <div className='script-data__table'>
                <div style={{ float: "right", marginBottom: "20px" }}>
                    <Button type="primary" htmlType="submit" size='large' block style={{ fontWeight: '500' }} icon={<PlusCircleOutlined />} className="script-data__button">
                        新しいシナリオを作成する
                    </Button>
                </div>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    // rowSelection={true}
                    rowSelection={{
                        type: "checkbox",
                        selectedRowKeys: alreadySelectedRows,
                        onChange: (keys) => {
                            setAlreadySelectedRows(keys);
                        },
                        onSelect: (record) => {
                            console.log("Record Selected:", { record });
                        },
                        getCheckboxProps: (record) => ({
                            // disabled: record.grade === "C",
                        }),
                        // hideSelectAll: true,
                        selections: [
                            Table.SELECTION_NONE,
                            Table.SELECTION_ALL,
                            Table.SELECTION_INVERT,
                            {
                                key: "event",
                                text: "Select Even Rows",
                                onSelect: (allKeys) => {
                                    const selectedKeys = allKeys.filter((key) => {
                                        return key % 2 === 0;
                                    });
                                    setAlreadySelectedRows(selectedKeys);
                                },
                            },
                            {
                                key: "excellent",
                                text: "Select Student with Excellent Grads",
                                onSelect: (allKeys) => {
                                    const selectedKeys = allKeys.filter((key) => {
                                        const isExcellent = dataSource.find(
                                            (student) => {
                                                return (
                                                    student.key === key &&
                                                    student.grade.includes("A")
                                                );
                                            }
                                        );
                                        return isExcellent;
                                    });
                                    setAlreadySelectedRows(selectedKeys);
                                },
                            },
                        ],
                    }}
                // pagination={{
                //     showSizeChanger: true,
                //     pageSizeOptions: [10, 20, 50, 100],
                //     total: sNews.news.paginatorInfo.total,
                //     defaultCurrent: pagination.page,
                //     defaultPageSize: pagination.pageSize,
                //     showQuickJumper: true,
                //     curent: pagination.page,
                //     pageSize: pagination.pageSize,
                //     onChange: (page, pageSize) => {
                //         setPagination({ ...pagination, page, pageSize });
                //     },
                // }}
                ></Table>
            </div>
        </div>
    );
}

export default ScriptDataTable;