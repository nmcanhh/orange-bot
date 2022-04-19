import React from 'react';
import "./styles.scss";
import { AdminAssets } from "../../../constants/assets.js"


function Header(props) {
    return (
        <div className='header'>
            <div className="header__title">
                <img src={AdminAssets.BIG_SIDEBAR_PROFILE} alt="" className="header__title__icon--big" />
                <span className='header__title__text'>Hồ sơ người dùng</span>
            </div>
            <div className="header__search">
                <span className="header__search__title">
                    Tìm kiếm
                </span>
                <input type="text" className='header__search__input' placeholder='Nhập nội dung...' />
                <div className='header__search__button'>
                    <img src={AdminAssets.SMALL_SIDEBAR_PROFILE} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;