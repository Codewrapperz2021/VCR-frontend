import React from 'react';
import Navbar from "../masterdas/navbar";
import Studentsidebar from "../masterdas/studentsidebar";
import Todolist from "../Todo/todolist";
import Footer from "../masterdas/footer";
export default function Studenttodolist() {

    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Studentsidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Todolist />
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
