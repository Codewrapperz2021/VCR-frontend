import '../../App.css';
import '../script';
import { Link } from 'react-router-dom';
import React from 'react'

export default function Studentsidebar() {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <Link className="nav-link" to="/studentdashboard">
                        <div className="sb-nav-link-icon  "><i className="fas fa-tachometer-alt navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Student Dashboard</h6>
                    </Link>
                    <Link className="nav-link" to="/student_time">
                        <div className="sb-nav-link-icon  "><i className="fas fa-hourglass-start navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Time Table</h6>
                    </Link>
                    <Link className="nav-link" to="/assessment">
                        <div className="sb-nav-link-icon  "><i className="fas fa-columns navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Assessments</h6>
                    </Link>
                    <Link className="nav-link" to="/result">
                        <div className="sb-nav-link-icon  "><i className="fas fa-graduation-cap navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Result</h6>
                    </Link>
                    <Link className="nav-link" to="/viewmaterialstudent">
                        <div className="sb-nav-link-icon  "><i className="fas fa-bookmark navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Material</h6>
                    </Link>
                    <Link className="nav-link" to="#">
                        <div className="sb-nav-link-icon  "><i className="fas fa-calendar-check navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Attendence</h6>
                    </Link>
                    <Link className="nav-link" to="/studenttodolist">
                        <div className="sb-nav-link-icon  "><i className="fas fa-calendar-check navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>My Todo list</h6>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
