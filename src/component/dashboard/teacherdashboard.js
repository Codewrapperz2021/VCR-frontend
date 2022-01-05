import React from 'react';
import '../../App.css';
import '../script';
import Teachersidebar from '../masterdas/teachersidebar';
import Navbar from '../masterdas/navbar';
import Footer from '../masterdas/footer';

export default function TeacherDashboard (){
    
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
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

