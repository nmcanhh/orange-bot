import { CaretDownOutlined } from "@ant-design/icons";
import { Line } from '@ant-design/plots';
import { DatePicker, Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import AdminLayout from "..";
import { AdminAnalysticsAssets } from "../../../constants/assets";
import Header from "./Header";
import "./styles.scss";

const { RangePicker } = DatePicker;

const momentFormat = "YYYY/MM/DD";


function ChartVisitor(props) {

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
                    <Header />
                    <div id="chart-visitor">
                        <div className="data-section">
                            <div className="table">
                                <div className="line-chart__title-wrapper">
                                    <span className="title">
                                        シナリオ:
                                    </span>
                                    <div className="selector">
                                        <div className="selector--icon">
                                            <img src={AdminAnalysticsAssets.ROCKET_ICON} alt="" />
                                        </div>
                                        <Dropdown.Button icon={<CaretDownOutlined />} overlay={menu}> 時間を選択</Dropdown.Button>
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
