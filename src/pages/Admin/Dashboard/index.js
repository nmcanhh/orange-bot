import React, { useEffect, useState } from "react";
import "./styles.scss"
import AdminLayout from "../../Admin";
import { Row, Col } from 'antd';
import { AdminDashboardAssets } from "../../../constants/assets.js"
import {
    Table
} from "antd";
import "antd/dist/antd.css";
import { uploadData } from "../../../constants/upload-data.js"
import { DeleteOutlined } from "@ant-design/icons"
import moment from "moment";
import dateFormat from "dateformat";


function Dashboard(props) {
    const [pagination, setPagination] = useState({ page: 1, pageSize: 10 });
    const [alreadySelectedRows, setAlreadySelectedRows] = useState([]);
    const [dataSource, setDataSource] = useState([]); // Table

    const fileIcon = (fileType) => {
        switch (fileType) {
            case "text":
                return (<div><img src={AdminDashboardAssets.DASHBOARD_FILE} alt="" className="dashboard-table__file-icon" /></div>);
            case "image":
                return (<div><img src={AdminDashboardAssets.DASHBOARD_IMAGE} alt="" className="dashboard-table__file-icon" /></div>);
            case "video":
                return (<div><img src={AdminDashboardAssets.DASHBOARD_VIDEO} alt="" className="dashboard-table__file-icon" /></div>);
            case "package":
                return (<div><img src={AdminDashboardAssets.DASHBOARD_PACKAGE} alt="" className="dashboard-table__file-icon" /></div>);
            default:
                return (<div><img src={AdminDashboardAssets.DASHBOARD_FILE} alt="" className="dashboard-table__file-icon" /></div>);
        }
    }

    useEffect(() => {
        const getRow = (uploadData) => {
            return uploadData?.map((row) => ({
                key: row.id,
                id: row.id,
                fileName: row.fileName,
                createdAt: row.createdAt,
                updatedAt: row.updatedAt,
                fileSize: row.fileSize,
                fileType: row.fileType,
            }));
        };
        setDataSource(getRow(uploadData));
    }, [uploadData]);

    const columns = [
        {
            title: "ファイル名",
            dataIndex: "fileName",
            width: "18rem",
            align: "left",
            render: (fileName, record) => {
                return (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {fileIcon(record.fileType)}
                        <span>{fileName}</span>
                    </div>
                );
            },
        },
        {
            title: "作成日",
            dataIndex: "createdAt",
            width: "24rem",
            align: "left",
            render: (createdAt, record) => (
                <div>
                    <span>{moment(createdAt).fromNow()}</span>
                </div>
            ),
        },
        {
            title: "サイズ",
            dataIndex: "fileSize",
            width: "24rem",
            align: "left",
            render: (fileSize) => (
                <div className="text-center">
                    <span>{fileSize}</span>
                </div>
            ),
        },
        {
            title: "更新日",
            dataIndex: "updatedAt",
            width: "22rem",
            align: "left",
            render: (updatedAt) => (
                <div className="text-center">
                    <span>{dateFormat(
                        new Date(updatedAt),
                        "yyyy/mm/dd"
                    )}</span>
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
        <AdminLayout>
            <div className="dashboard-wrapper">
                <div className="dashboard-body">
                    <div className="dashboard-row">
                        <div className="dashboard__card dashboard__card-1x">
                            <div className="dashboard__card__image circle-blue">
                                <img src={AdminDashboardAssets.DASHBOARD_FILE} alt="" />
                            </div>
                            <div className="dashboard__card__info">
                                <span className="dashboard__card__number">1.5GB</span>
                                <span className="dashboard__card__text">ドキュメント</span>
                            </div>
                        </div>
                        <div className="dashboard__card dashboard__card-1x">
                            <div className="dashboard__card__image circle-yellow">
                                <img src={AdminDashboardAssets.DASHBOARD_IMAGE} alt="" />
                            </div>
                            <div className="dashboard__card__info">
                                <span className="dashboard__card__number">2.5GB</span>
                                <span className="dashboard__card__text">写真</span>
                            </div>
                        </div>
                        <div className="dashboard__card dashboard__card-1x">
                            <div className="dashboard__card__image circle-red">
                                <img src={AdminDashboardAssets.DASHBOARD_VIDEO} alt="" />
                            </div>
                            <div className="dashboard__card__info">
                                <span className="dashboard__card__number">10.5GB</span>
                                <span className="dashboard__card__text">ビデオ</span>
                            </div>
                        </div>
                        <div className="dashboard__card dashboard__card-1x">
                            <div className="dashboard__card__image circle-violet">
                                <img src={AdminDashboardAssets.DASHBOARD_PACKAGE} alt="" />
                            </div>
                            <div className="dashboard__card__info">
                                <span className="dashboard__card__number">5.5GB</span>
                                <span className="dashboard__card__text">その他</span>
                            </div>
                        </div>

                        <div className="dashboard__card dashboard__card-2x">
                            <div className="dashboard__card__info--small">
                                <img src={AdminDashboardAssets.DASHBOARD_STORAGE} alt="" />
                                <span className="dashboard__card__text--small">保管所</span>
                            </div>
                            <div className="dashboard__storage-progress">
                                <div className="dashboard__storage-used"></div>
                                <span className="dashboard__storage-used-counter">20GB</span>
                                <span className="dashboard__storage-rest-counter">35GB</span>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-table">
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
                                                return key % 2 == 0;
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
                                                            student.key == key &&
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
            </div>
        </AdminLayout >
    );
}

export default Dashboard;