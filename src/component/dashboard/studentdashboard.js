import React from 'react';
import '../../App.css';
import '../script';
import { Link, NavLink } from 'react-router-dom';



const StudentDashboard = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Student Dashboard</title>
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

                    <li><a className="dropdown-item" href="#!">Logout</a></li>
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
                                    <Link className="nav-link" to="/studentdashboard">
                                        <div className="sb-nav-link-icon  "><i className="fas fa-tachometer-alt navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{color: "white"}}>Student Dashboard</h6>
                                    </Link>

                                    <Link className="nav-link" to="/timetable">
                                        <div className="sb-nav-link-icon  "><i className="fas fa-columns navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{color: "white"}}>Time Table</h6>
                                    </Link>
                                  </div>
                                </div>

                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <main>

                        <div className="card-header">
                                <i className="fas fa-tachometer-alt p-1"></i>
                                Student Dashboard
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

export default StudentDashboard;
