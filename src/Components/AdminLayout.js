
import React from 'react';
import {Link} from "react-router-dom";

const AdminLayout = (props) => {
    return (
        <div className="admin-layout">
            <div className="admin-layout-left">
                <div className="user-info d-flex justify-content-between align-items-center">
                    <div>
                        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-user-interface-kiranshastry-solid-kiranshastry-1.png"/>
                    </div>
                    <div>
                        <h5 className="mb-1">Umidjon Xolmuminov</h5>
                        <p className="mb-0">Administrator</p>
                    </div>
                </div>
                <div className="menu">
                    <ul className="nav flex-column">
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/menus" ? 'active' : ""}`} >Menyular</Link> </li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/news" ? 'active' : ""}`}>Yangiliklar</Link> </li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`}>Menyular</Link> </li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`} >Menyular</Link> </li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`} >Menyular</Link> </li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`} >Menyular</Link> </li>
                    </ul>
                </div>
            </div>
            <div className="admin-layout-right">
                {props.children}
            </div>

        </div>
    );
};

export default AdminLayout;