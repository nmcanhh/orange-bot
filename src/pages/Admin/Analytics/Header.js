import { DatePicker, Tabs } from "antd";
import moment from "moment";
import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "./styles.scss";

function Header(props) {
    let navigate = useNavigate();
    console.log("navigate", navigate);


    const { RangePicker } = DatePicker;

    const { TabPane } = Tabs;
    const momentFormat = "YYYY/MM/DD";

    return (
        <div id="analystics">
            <div className="analystics-header">
                <div className="tab-pane">
                    <NavLink to="/analystics/chart-attachment" className={(navData) => (navData.isActive ? 'tab-pane__btn tab-pane__btn--active' : 'tab-pane__btn')}>添付ファイル</NavLink>
                    <NavLink to="/analystics/chart-script" className={(navData) => (navData.isActive ? 'tab-pane__btn tab-pane__btn--active' : 'tab-pane__btn')}>シナリオ</NavLink>
                    <NavLink to="/analystics/chart-visitor" className={(navData) => (navData.isActive ? 'tab-pane__btn tab-pane__btn--active' : 'tab-pane__btn')}>
                        アクセス数
                    </NavLink>
                    <NavLink to="/analystics/chart-transaction" className={(navData) => (navData.isActive ? 'tab-pane__btn tab-pane__btn--active' : 'tab-pane__btn')}>開始数・離脱数</NavLink>
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
        </div>
    );
}

export default Header;