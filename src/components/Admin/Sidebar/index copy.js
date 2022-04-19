import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./styles.scss"
import { AdminSidebar } from '../../../constants/AdminSidebar';
import { AdminAssets } from "../../../constants/assets.js"

function Sidebar(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.admin-sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = AdminSidebar.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);
    return (
        <div className='admin-sidebar'>
            <div className='admin-login-logo'>
                <img src={AdminAssets.ORANGE_LOGO} alt="" className='admin-login-img' />
                <h1 className='admin-login-title'>OrangeBot</h1>
            </div>
            <div ref={sidebarRef} className="admin-sidebar__menu">
                <div
                    ref={indicatorRef}
                    className="admin-sidebar__menu__indicator"
                    style={{
                        transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                    }}
                ></div>
                {
                    AdminSidebar.map((item, index) => (
                        <Link to={item.to} key={index}>
                            <div className={`admin-sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                <div className="admin-sidebar__menu__item__icon">
                                    {item.icon}
                                </div>
                                <div className="admin-sidebar__menu__item__text">
                                    {item.display}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Sidebar;