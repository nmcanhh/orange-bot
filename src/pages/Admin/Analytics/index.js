import React, { useEffect, useState } from "react";
import AdminLayout from "..";
import "./styles.scss";
import {
    Modal,
    Tabs,
    Input,
    Select,
    Table,
    Button,
    Popconfirm,
    Form,
} from "antd";
import { DatePicker, Space } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import { AdminAnalysticsAssets } from "../../../constants/assets";
import { Pie } from '@ant-design/plots';
import { AdminDashboardAssets } from "../../../constants/assets.js"
import { uploadData } from "../../../constants/upload-data.js"
import { DeleteOutlined } from "@ant-design/icons"
import dateFormat from "dateformat";
import { listScript } from "../../../constants/list-script.js"

const data = [
    {
        type: '面談日程',
        value: 27,
    },
    {
        type: '航空券予約',
        value: 25,
    },
    {
        type: 'クーポン',
        value: 18,
    },
];
const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
            textAlign: 'center',
            fontSize: 14,
        },
    },
    legend: {
        position: 'bottom'
    },
    interactions: [
        {
            type: 'element-selected',
        },
        {
            type: 'element-active',
        },
    ],
    statistic: {
        title: false,
        content: {
            style: {
                whiteSpace: 'pre-wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
            content: '',
        },
    },
};

const { RangePicker } = DatePicker;

const { TabPane } = Tabs;
const momentFormat = "YYYY/MM/DD";

function Analytics(props) {

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
        const getRow = (listScript) => {
            return listScript?.map((row) => ({
                key: row.id,
                id: row.id,
                name: row.name,
                times: row.times,
                website: row.website,
            }));
        };
        setDataSource(getRow(listScript));
    }, [listScript]);

    const columns = [
        {
            title: "項番",
            dataIndex: "id",
            width: "18rem",
            align: "left",
            render: (id, record) => {
                return (
                    <div>
                        <span>{id}</span>
                    </div>
                );
            },
        },
        {
            title: "シナリオ名",
            dataIndex: "name",
            width: "24rem",
            align: "left",
            render: (name, record) => {
                return (
                    <div>
                        <span>{name}</span>
                    </div>
                );
            },
        },
        {
            title: "使用回数",
            dataIndex: "times",
            width: "28rem",
            align: "left",
            render: (times, record) => (
                <div>
                    <span>{times}</span>
                </div>
            ),
        },
        {
            title: "ランディングページ",
            dataIndex: "website",
            width: "24rem",
            align: "left",
            render: (website) => (
                <div className="text-center">
                    <span>{website}</span>
                </div>
            ),
        },
    ];


    return (
        <AdminLayout>
            <div id="analystics-chart">
                <div className="analystics-wrapper">
                    <div className="analystics-header">
                        <div className="tab-pane">
                            <button className="tab-pane__btn">添付ファイル</button>
                            <button className="tab-pane__btn tab-pane__btn--active">シナリオ</button>
                            <button className="tab-pane__btn">
                                アクセス数
                            </button>
                            <button className="tab-pane__btn">開始数・離脱数</button>
                        </div>
                        <div className="ranger-picker">
                            <span className="ranger-picker__text">期間</span>
                            <RangePicker
                                defaultValue={[
                                    moment("2015/01/01", momentFormat),
                                    moment("2015/01/01", momentFormat),
                                ]}
                                format={momentFormat}
                                size="large"
                            />
                        </div>
                    </div>
                    <div className="data-section">
                        <div className="data-section--left">
                            <span className="data-section__title">
                                シナリオがよく使われたページ
                            </span>
                            <div className="card-group">
                                <div className="card-item">
                                    <div className="card-item__content" style={{ backgroundImage: `url(${AdminAnalysticsAssets.CARD_1})`, }}>
                                        <div className="card-item__icon">
                                            <img src={AdminAnalysticsAssets.ICON_1} alt="" />
                                        </div>
                                        <div className="card-item__text-group">
                                            <span className="card-item__text card-item__text--brand">Spectrum</span>
                                            <span className="card-item__text card-item__text--total">912,873</span>
                                        </div>
                                    </div>
                                    <span className="brand-name">spectrum.com</span>
                                </div>
                                <div className="card-item">
                                    <div className="card-item__content" style={{ backgroundImage: `url(${AdminAnalysticsAssets.CARD_2})`, }}>
                                        <div className="card-item__icon">
                                            <img src={AdminAnalysticsAssets.ICON_2} alt="" />
                                        </div>
                                        <div className="card-item__text-group">
                                            <span className="card-item__text card-item__text--brand">Unsplash</span>
                                            <span className="card-item__text card-item__text--total">912,873</span>
                                        </div>
                                    </div>
                                    <span className="brand-name">unsplash.com</span>
                                </div>
                                <div className="card-item">
                                    <div className="card-item__content" style={{ backgroundImage: `url(${AdminAnalysticsAssets.CARD_3})`, }}>
                                        <div className="card-item__icon">
                                            <img src={AdminAnalysticsAssets.ICON_3} alt="" />
                                        </div>
                                        <div className="card-item__text-group">
                                            <span className="card-item__text card-item__text--brand">Lazada</span>
                                            <span className="card-item__text card-item__text--total">912,873</span>
                                        </div>
                                    </div>
                                    <span className="brand-name">lazada.com</span>
                                </div>
                                <div className="card-item">
                                    <div className="card-item__content" style={{ backgroundImage: `url(${AdminAnalysticsAssets.CARD_4})`, }}>
                                        <div className="card-item__icon">
                                            <img src={AdminAnalysticsAssets.ICON_4} alt="" />
                                        </div>
                                        <div className="card-item__text-group">
                                            <span className="card-item__text card-item__text--brand">Baemin</span>
                                            <span className="card-item__text card-item__text--total">912,873</span>
                                        </div>
                                    </div>
                                    <span className="brand-name">baemin.vn</span>
                                </div>
                                <div className="card-item">
                                    <div className="card-item__content" style={{ backgroundImage: `url(${AdminAnalysticsAssets.CARD_5})`, }}>
                                        <div className="card-item__icon">
                                            <img src={AdminAnalysticsAssets.ICON_5} alt="" />
                                        </div>
                                        <div className="card-item__text-group">
                                            <span className="card-item__text card-item__text--brand">Tiki</span>
                                            <span className="card-item__text card-item__text--total">912,873</span>
                                        </div>
                                    </div>
                                    <span className="brand-name">tiki.vn</span>
                                </div>
                            </div>
                        </div>
                        <div className="data-section--right">
                            <span className="data-section__title">
                                シナリオ間の使用率
                            </span>
                            <div className="donut-chart">
                                <Pie {...config} />
                            </div>
                        </div>
                        <div className="table">
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
            </div>

        </AdminLayout>
    );
}

export default Analytics;
