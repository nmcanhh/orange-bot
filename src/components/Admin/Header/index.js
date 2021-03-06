import React from 'react';
import "./styles.scss";
import { AdminSidebarAssets } from "../../../constants/assets.js"



function Header(props) {
    return (
        <div className='header'>
            <div className="header__title">
                <img src={AdminSidebarAssets.BIG_SIDEBAR_PROFILE} alt="" className="header__title__icon--big" />
                <span className='header__title__text'>プロファイル</span>
            </div>
            <div className="header__search">
                <span className="header__search__title">
                    テナント名
                </span>
                <input type="text" className='header__search__input' placeholder='テナント①' />
                <div className='header__search__button'>
                    <img src={AdminSidebarAssets.SMALL_SIDEBAR_PROFILE} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;