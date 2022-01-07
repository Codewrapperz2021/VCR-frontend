import React from 'react';
import '../../App.css';
import '../script';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Adminsidebar() {

    const data = useSelector(state => state.UserData)

    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <Link className="nav-link" to="/admindashboard">
                        <div className="sb-nav-link-icon  "><i className="fas fa-tachometer-alt navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Admin Dashboard</h6>
                    </Link>
                    <div className="sb-sidenav-menu-heading">Interface</div>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Teachers</h6>
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down navbar-logo"></i></div>
                    </a>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/viewfaculty">Show Teachers data</Link>
                            <Link className="nav-link" to="/addfaculty">Add Teacher</Link>
                        </nav>
                    </div>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayout1" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-user-graduate navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Students</h6>
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down navbar-logo"></i></div>
                    </a>
                    <div className="collapse" id="collapseLayout1" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/viewstudent">Show Students data</Link>
                            <Link className="nav-link" to="/addstudent">Add Student</Link>
                        </nav>
                    </div>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayout2" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-book-open navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Courses</h6>
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down navbar-logo"></i></div>
                    </a>
                    <div className="collapse" id="collapseLayout2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/viewcourse">Show Courses data</Link>
                            <Link className="nav-link" to="/addcourse">Add Courses</Link>
                        </nav>
                    </div>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayout3" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-book navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Subjects</h6>
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down navbar-logo"></i></div>
                    </a>
                    <div className="collapse" id="collapseLayout3" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/viewsubject">Show Subjects data</Link>
                            <Link className="nav-link" to="/addsubject">Add Subject</Link>
                        </nav>
                    </div>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayoutstty" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>lecture</h6>
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down navbar-logo"></i></div>
                    </a>
                    <div className="collapse" id="collapseLayoutstty" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/addlecture">Add Lecture</Link>
                            <Link className="nav-link" to="/viewlecture">view lecture</Link>
                        </nav>
                    </div>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayoutstt" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Time Table</h6>
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down navbar-logo"></i></div>
                    </a>
                    <div className="collapse" id="collapseLayoutstt" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/addtimetable">Add Timetable</Link>
                            <Link className="nav-link" to="/viewtimetable">View Timetable</Link>
                        </nav>
                        
                    </div>
                    {/* <Link className="nav-link" to="/admintodolist">
                        <div className="sb-nav-link-icon  "><i className="fas fa-calendar-check navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>My Todo list</h6>
                    </Link> */}

                </div>
            </div>
        </nav>
    )
};

