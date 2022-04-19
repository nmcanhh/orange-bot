import React from 'react';
import Header from '../../components/Admin/Header';
import Sidebar from '../../components/Admin/Sidebar';
import "./styles.scss";

function AdminLayout(props) {
    return (
        <div className='background--main'>
            <div>
                <Sidebar />
                {/* Navbar */}
                <Header />
                {/* Content */}
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;