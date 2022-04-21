import React, { useState } from 'react';
import "./styles.scss";
import AdminLayout from '..';
import ScriptDataTable from './ScriptDataTable';
import ScriptDataEmpty from './ScriptDataEmpty';


function Script(props) {

    return (
        <AdminLayout>
            <div className="page-wrapper">
               
                    <ScriptDataTable />
                
            </div>
        </AdminLayout>
    );
}

export default Script;