import React from "react";
import Navbar from "../masterdas/navbar";
import Teachersidebar from "../masterdas/teachersidebar";
import Todolist from "../Todo/todolist";
import Footer from "../masterdas/footer";

export default function Teachertodolist() {

  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Teachersidebar />
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
