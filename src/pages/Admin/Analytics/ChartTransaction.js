import { Column } from '@ant-design/plots';
import "antd/dist/antd.css";
import React from "react";
import AdminLayout from "..";
import Header from "./Header";
import "./styles.scss";


function ChartTransaction(props) {


    const data = [
        {
            type: '1月',
            sales: 38,
        },
        {
            type: '2月',
            sales: 52,
        },
        {
            type: '3月',
            sales: 61,
        },
        {
            type: '4月',
            sales: 145,
        },
        {
            type: '5月',
            sales: 48,
        },
        {
            type: '6月',
            sales: 38,
        },
        {
            type: '7月',
            sales: 38,
        },
        {
            type: '8月',
            sales: 38,
        },
        {
            type: '9月',
            sales: 32,
        },
        {
            type: '10月',
            sales: 22,
        },
        {
            type: '11月',
            sales: 37,
        },
        {
            type: '12月',
            sales: 20,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: '销售额',
            },
        },
        minColumnWidth: 20,
        maxColumnWidth: 20,
    };

    return (
        <AdminLayout>
            <div id="analystics">
                <div className="analystics-wrapper">
                    <Header />
                    <div id="chart-transaction">
                        <div className="data-section">
                            <div className="chart-column">
                                <span className="chart__title">
                                    チャットボットの途中で離脱数
                                </span>
                                <Column {...config} />
                            </div>
                            <div className="chart-column">
                                <span className="chart__title">
                                    チャットボットの途中で離脱数
                                </span>
                                <Column {...config} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AdminLayout>
    );
}

export default ChartTransaction;
