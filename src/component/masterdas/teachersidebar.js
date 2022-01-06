import React from 'react';
import '../../App.css';
import '../script';
import { Link } from 'react-router-dom';

export default function Teachersidebar() {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <Link className="nav-link" to="/teacherdashboard">
                        <div className="sb-nav-link-icon  "><i className="fas fa-tachometer-alt navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Teacher Dashboard</h6>
                    </Link>

                    <Link className="nav-link" to="">
                        <div className="sb-nav-link-icon  "><i className="fas fa-columns navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Time Table</h6>
                    </Link>

                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fa fa-question-circle navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Questions</h6>
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down navbar-logo"></i></div>
                    </a>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/addquestion">Add Question</Link>
                            <Link className="nav-link" to="/viewquestion">Show Question</Link>
                        </nav>
                    </div>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayoutss" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fa fa-question-circle navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Material</h6>
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down navbar-logo"></i></div>
                    </a>
                    <div className="collapse" id="collapseLayoutss" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/addmaterial">Add Material</Link>
                            <Link className="nav-link" to="/viewmaterial">Show Material</Link>
                        </nav>
                    </div>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts1" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fa fa-list-alt navbar-logo"></i></div>
                        <h6 className="pt-2 " style={{ color: "white" }}>Results</h6>
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down navbar-logo"></i></div>
                    </a>
                    <div className="collapse" id="collapseLayouts1" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="">Show Results</Link>
                        </nav>
                        
                    </div>
                    <Link className="nav-link" to="/todolist">
                            <div className="sb-nav-link-icon  "><i className="fas fa-calendar-check navbar-logo"></i></div>
                            <h6 className="pt-2 " style={{ color: "white" }}>My Todo list</h6>
                        </Link>
                </div>
            </div>
        </nav>
    )
}
