import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./styles.scss"
import { AdminSidebar } from '../../../constants/AdminSidebar.js';
import { AdminAssets } from "../../../constants/assets.js"

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <img src={AdminAssets.ORANGE_LOGO} alt="" className='sidebar__header-image' />
                <span className='sidebar__header-title'>OrangeBot</span>
            </div>
            <div className="sidebar__body">
                <ul className='sidebar__list-group'>
                    {AdminSidebar.map(item => {
                        return <li>
                            <a href="" className='sidebar__list-group-item'>
                                <span className='sidebar__list-group-icon'>
                                    <img src={item.smallIcon} alt="" />
                                </span>
                                <span className='sidebar__list-group-title'>{item.title}</span>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;