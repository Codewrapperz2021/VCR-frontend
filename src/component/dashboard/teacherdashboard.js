import React from 'react';
import '../../App.css';
import '../script';
import Teachersidebar from '../masterdas/teachersidebar';
import Navbar from '../masterdas/navbar';
import Footer from '../masterdas/footer';
import { Link } from 'react-router-dom';

export default function TeacherDashboard() {

    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Teachersidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="card-header">
                            <i className="fas fa-tachometer-alt p-1"></i>
                            Teacher Dashboard
                            <div className="container-fluid px-4">
                                <div className="row justify-content-between p-3">
                                    <div className="col-md-6 row justify-content-between p-3 abc">
                                        <h4 className="abc1">Question Details </h4>
                                        <div className="col-md-6">
                                            <div className="card text-white" >
                                                <div className="card-body">View Questions</div>
                                                <div className="card-footer d-flex align-items-center justify-content-between">
                                                    <Link className="small text-white stretched-link" to="/viewquestion">View Details</Link>
                                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card text-white ">
                                                <div className="card-body">Add Question</div>
                                                <div className="card-footer d-flex align-items-center justify-content-between">
                                                    <Link className="small text-white stretched-link" to="/addquestion">Add Details</Link>
                                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="abc col-md-6 row justify-content-between p-3">
                                        <h4 className="abc1">Material Details</h4>
                                        <div className="col-md-6">
                                            <div className="card text-white ">
                                                <div className="card-body">Show Materials</div>
                                                <div className="card-footer d-flex align-items-center justify-content-between">
                                                    <Link className="small text-white stretched-link" to="/viewmaterial">View Details</Link>
                                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card text-white ">
                                                <div className="card-body">Add Material</div>
                                                <div className="card-footer d-flex align-items-center justify-content-between">
                                                    <Link className="small text-white stretched-link" to="/addmaterial">Add Details</Link>
                                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

