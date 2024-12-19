// src/layouts/MainLayout.tsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const MainLayout: React.FC = () => {

    const username = sessionStorage.getItem('username');
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "rgba(75, 192, 192, 0.5)",  color: "#fff"}} >
                <div className="container-fluid" >
                    <Link className="navbar-brand" to="/">
                        My App
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/overview">
                                    Overview
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/form-creation">
                                    Form Creation
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/poa">
                                    POA
                                </Link>
                            </li>
                        </ul>
                        {/* Admin Dropdown Menu */}
                        <div className="dropdown">
                            <button
                                className="btn btn-outline-success dropdown-toggle"
                                type="button"
                                id="adminDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {username}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="adminDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/admin/user">Users</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/admin/settings">Settings</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/admin/reports">Reports</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <section>
                <Outlet />
            </section>
        </div>
    );
};

export default MainLayout;
