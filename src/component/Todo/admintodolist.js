import React from "react";
import Navbar from "../masterdas/navbar";
import Adminsidebar from "../masterdas/adminsidebar";
import Todolist from "../Todo/todolist";
import Footer from "../masterdas/footer";

export default function Admintodolist() {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Adminsidebar />
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
