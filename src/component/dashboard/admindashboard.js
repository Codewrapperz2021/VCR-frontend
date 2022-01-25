import React from 'react';
import authservices from '../../services/authservices';
import Adminsidebar from '../masterdas/adminsidebar';
import Navbar from '../masterdas/navbar';
import Footer from '../masterdas/footer';
import '../../App.css';
import '../script';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios'
const AdminDashboard = () => {

    const data = useSelector(state => state.login.UserData)
    const logout = (token) => {
        authservices.logout(data).then((res) => {
            window.location.href = "/";
            swal("Logged Out!", "Login to access Dashboard!", "success", {
                buttons: false,
                timer: 2000,
            });
        });
    }
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Adminsidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="card-header">
                            <i className="fas fa-tachometer-alt p-1"></i>
                            Admin Dashboard
                        </div>
                        <div className="container-fluid px-4">
                            <div className="row justify-content-between p-3">
                                <div className="col-md-6 row justify-content-between p-3 abc">
                                    <h4 className="abc1">Teacher detail</h4>
                                    <div className="col-md-6">
                                        <div className="card text-white" >
                                            <div className="card-body">View Teachers</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <Link className="small text-white stretched-link" to="/viewfaculty">View Details</Link>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card text-white ">
                                            <div className="card-body">Add Teacher</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <Link className="small text-white stretched-link" to="/addfaculty">Add Details</Link>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="abc col-md-6 row justify-content-between p-3">
                                    <h4 className="abc1">Students detail</h4>
                                    <div className="col-md-6">
                                        <div className="card text-white ">
                                            <div className="card-body">View Students</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <Link className="small text-white stretched-link" to="/viewstudent">View Details</Link>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card text-white ">
                                            <div className="card-body">Add Student</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <Link className="small text-white stretched-link" to="/addstudent">Add Details</Link>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-between p-3">
                                <div className="abc col-md-6 row justify-content-between p-3">
                                    <h4 className="abc1">Courses detail</h4>
                                    <div className="col-md-6">
                                        <div className="card text-white">
                                            <div className="card-body">View Courses</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <Link className="small text-white stretched-link" to="/viewcourse">View Details</Link>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card text-white ">
                                            <div className="card-body">Add Course</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <Link className="small text-white stretched-link" to="/addcourse">Add Details</Link>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="abc col-md-6 row justify-content-between p-3">
                                    <h4 className="abc1">Subjects detail</h4>
                                    <div className="col-md-6">
                                        <div className="card text-white ">
                                            <div className="card-body">View Subjects</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <Link className="small text-white stretched-link" to="/viewsubject">View Details</Link>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card text-white ">
                                            <div className="card-body">Add Subject</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <Link className="small text-white stretched-link" to="/addsubject">Add Details</Link>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
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
    )
}

export default AdminDashboard;
