import React from 'react';
import '../../App.css';
import '../script';
import { Link, NavLink } from 'react-router-dom';



const AdminDashboard = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Admin Dashboard</title>
                <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
                                
                
                
            </head>
            <body className="sb-nav-fixed">
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    

                    <img style={{width: "200px", padding: "10px"}} src="images/logo.png" alt=""/>   
                   
                    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars navbar-logo"></i></button>
                   
                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">

                    </div>
                    </form>
                    
                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw text-light"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">

                    <li><a className="dropdown-item" href="/login">Logout</a></li>
                    </ul>
                    </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav">
                                    <div className="sb-sidenav-menu-heading">Core</div>
                                    <Link className="nav-link" to="/admindashboard">
                                        <div className="sb-nav-link-icon  "><i className="fas fa-tachometer-alt navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{color: "white"}}>Admin Dashboard</h6>
                                    </Link>
                                    <div className="sb-sidenav-menu-heading">Interface</div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                        <div className="sb-nav-link-icon"><i className="fas fa-columns navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{color: "white"}}>Teachers</h6>
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
                                        <h6 className="pt-2 " style={{color: "white"}}>Students</h6>
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
                                        <h6 className="pt-2 " style={{color: "white"}}>Courses</h6>
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
                                        <h6 className="pt-2 " style={{color: "white"}}>Subjects</h6>
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down navbar-logo"></i></div>
                                    </a>
                                    <div className="collapse" id="collapseLayout3" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link className="nav-link" to="/viewsubject">Show Subjects data</Link>
                                            <Link className="nav-link" to="/addsubject">Add Subject</Link>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayoutstt" aria-expanded="false" aria-controls="collapseLayouts">
                                        <div className="sb-nav-link-icon"><i className="fas fa-columns navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{color: "white"}}>Time Table</h6>
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down navbar-logo"></i></div>
                                    </a>
                                    <div className="collapse" id="collapseLayoutstt" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link className="nav-link" to="/timetable">View Timetable</Link>
                                            <Link className="nav-link" to="#">Add Timetable</Link>
                                        </nav>
                                    </div>

                                </div>
                            </div>

                        </nav>
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
                                        <h4  className="abc1">Teacher detail</h4>
                                        <div className="col-md-6">
                                            <div className="card text-white" >
                                                <div className="card-body">Show Details</div>
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
                                                    <Link className="small text-white stretched-link" to="/addfaculty">View Details</Link>
                                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="abc col-md-6 row justify-content-between p-3">
                                        <h4 className="abc1">Students detail</h4>
                                        <div className="col-md-6">
                                            <div className="card text-white ">
                                                <div className="card-body">Show Details</div>
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
                                                    <Link className="small text-white stretched-link" to="/addstudent">View Details</Link>
                                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>





                                </div>

                                <div className="row justify-content-between p-3">
                                    <div  className="abc col-md-6 row justify-content-between p-3">
                                        <h4 className="abc1">Courses detail</h4>
                                        <div className="col-md-6">
                                            <div className="card text-white">
                                                <div className="card-body">Show Details</div>
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
                                                    <Link className="small text-white stretched-link" to="/addcourse">View Details</Link>
                                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div  className="abc col-md-6 row justify-content-between p-3">
                                        <h4 className="abc1">Subjects detail</h4>
                                        <div className="col-md-6">
                                            <div className="card text-white ">
                                                <div className="card-body">Show Details</div>
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
                                                    <Link className="small text-white stretched-link" to="/addsubject">View Details</Link>
                                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>





                                </div>


                            </div>
                        </main>
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright &copy; RealCODERZ</div>

                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
                
                <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
                <script src="assets/demo/chart-area-demo.js"></script>
                <script src="assets/demo/chart-bar-demo.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
                <script src="js/datatables-simple-demo.js"></script>
                
            </body>
        </html>



    );
};

export default AdminDashboard;
