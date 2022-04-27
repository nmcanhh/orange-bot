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
import { Line } from '@ant-design/plots';
import { AdminDashboardAssets } from "../../../constants/assets.js"
import { uploadData } from "../../../constants/upload-data.js"
import { DeleteOutlined } from "@ant-design/icons"
import dateFormat from "dateformat";
import { listScript } from "../../../constants/list-script.js"


const { RangePicker } = DatePicker;

const momentFormat = "YYYY/MM/DD";

function ChartVisitor(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
        smooth: true,
    };

    return (
        <AdminLayout>
            <div id="analystics">
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
                    <div id="analystics-attachment">
                        <div className="data-section">
                            <div className="table">
                                <div className="line-chart__title">
                                    <span className="data-section__title">
                                        シナリオ:
                                    </span>
                                    <div className="data-section__select">
                                        <span className="data-section__title">
                                            シナリオ:
                                        </span>
                                        <span className="data-section__title">
                                            航空券予約
                                        </span>
                                    </div>

                                </div>
                                <Line {...config} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AdminLayout>
    );
}

export default ChartVisitor;
