import React from "react";
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

const { RangePicker } = DatePicker;

const { TabPane } = Tabs;

const dateFormat = "YYYY/MM/DD";

function Chart(props) {
    return (
        <AdminLayout>
            <div className="chart-wrapper" id="page">
                <div className="chart-header">
                    <div className="chart__tab-pane">
                        <button className="chart__tab-pane__button">添付ファイル</button>
                        <button className="chart__tab-pane__button">シナリオ</button>
                        <button className="chart__tab-pane__button chart__tab-pane__button--active">
                            アクセス数
                        </button>
                        <button className="chart__tab-pane__button">開始数・離脱数</button>
                    </div>
                    <div className="chart__ranger-picker">
                        <span className="chart__ranger-picker__text">期間</span>
                        <RangePicker
                            defaultValue={[
                                moment("2015/01/01", dateFormat),
                                moment("2015/01/01", dateFormat),
                            ]}
                            format={dateFormat}
                            size="large"
                        />
                    </div>
                </div>
                <div className="chart__data-section">
                    <div className="chart__data-section--left">
                        <span className="chart__data-section--left__text">
                            シナリオがよく使われたページ
                        </span>
                        <div className="chart__card-group">
                            <div className="chart__card-item">
                                <div className="chart__card-item__body">
                                    <img src="" alt="" className="chart__card-item__icon" />
                                    <div className="chart__card-item__text-group">
                                        <span className="chart__card-item__text-1">Spectrum</span>
                                        <span className="chart__card-item__text-2">912,873</span>
                                    </div>
                                </div>
                                <span className="chart__card-item__website">spectrum.com</span>
                            </div>
                            <div className="chart__card-item">
                                <div className="chart__card-item__body">
                                    <img src="" alt="" className="chart__card-item__icon" />
                                    <div className="chart__card-item__text-group">
                                        <span className="chart__card-item__text-1">Unsplash</span>
                                        <span className="chart__card-item__text-2">232,873</span>
                                    </div>
                                </div>
                                <span className="chart__card-item__website">spectrum.com</span>
                            </div>
                            <div className="chart__card-item">
                                <div className="chart__card-item__body">
                                    <img src="" alt="" className="chart__card-item__icon" />
                                    <div className="chart__card-item__text-group">
                                        <span className="chart__card-item__text-1">Lazada</span>
                                        <span className="chart__card-item__text-2">162,873</span>
                                    </div>
                                </div>
                                <span className="chart__card-item__website">spectrum.com</span>
                            </div>
                            <div className="chart__card-item">
                                <div className="chart__card-item__body">
                                    <img src="" alt="" className="chart__card-item__icon" />
                                    <div className="chart__card-item__text-group">
                                        <span className="chart__card-item__text-1">Baemin</span>
                                        <span className="chart__card-item__text-2">62,873</span>
                                    </div>
                                </div>
                                <span className="chart__card-item__website">spectrum.com</span>
                            </div>
                            <div className="chart__card-item">
                                <div className="chart__card-item__body">
                                    <img src="" alt="" className="chart__card-item__icon" />
                                    <div className="chart__card-item__text-group">
                                        <span className="chart__card-item__text-1">Tiki</span>
                                        <span className="chart__card-item__text-2">912,873</span>
                                    </div>
                                </div>
                                <span className="chart__card-item__website">spectrum.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="chart__data-section--right">
                        <span className="chart__data-section--right__text">
                            シナリオ間の使用率
                        </span>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Chart;
