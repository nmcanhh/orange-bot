import React from 'react';
import AdminLayout from '..';
import ScriptDataEmpty from './ScriptDataEmpty';
import "./styles.scss";


function Script(props) {

    return (
        <AdminLayout>
            <div className="page-wrapper">
                <ScriptDataEmpty />
            </div>
        </AdminLayout>
    );
}

export default Script;