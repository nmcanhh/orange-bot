import { NavLink } from "react-router-dom";
import { AdminSidebar } from '../../../constants/AdminSidebar.js';
import { AdminSidebarAssets } from "../../../constants/assets.js";
import "./styles.scss";

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <img src={AdminSidebarAssets.ORANGE_LOGO} alt="" className='sidebar__header-image' />
                <span className='sidebar__header-title'>OrangeBot</span>
            </div>
            <div className="sidebar__body">
                <ul className='sidebar__list-group'>
                    {AdminSidebar.map(item => {
                        return <li>
                            <NavLink
                                className={(navData) => (navData.isActive ? 'sidebar__list-group-item sidebar--active' : 'sidebar__list-group-item')}
                                to={item.to}

                            >
                                <span className='sidebar__list-group-icon'>
                                    <img src={item.smallIcon} alt="" />
                                </span>
                                <span className='sidebar__list-group-title'>{item.title}</span>
                            </NavLink>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;