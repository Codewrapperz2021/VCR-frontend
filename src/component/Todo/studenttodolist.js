import React, { useEffect, useState } from "react";
import Navbar from "../masterdas/navbar";
import Studentsidebar from "../masterdas/studentsidebar";
import Footer from "../masterdas/footer";
import Viewlist from "./Viewlist";

export default function Studenttodolist() {
  const [data, setData] = useState([]);
  const [noteslist, setNoteslist] = useState(""); 
  let sno =1;
 

  useEffect(() => {
    refr();
  }, []);
  function refr() {
    fetch("http://localhost:8000/api/todo/").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }
  function deleteuser(id) {
    fetch("http://localhost:8000/api/todo/" + id, {
      method: "DELETE"
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
        refr();
      });
    });
  }
  function save() {
    let data = {noteslist};
    fetch("http://localhost:8000/api/todo/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.warn("res", result);
      refr();
    });
  }

  return (

    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Studentsidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container d-flex justify-content-center">
              <div className="col-md-12  text-center">
                <h3>My todo list</h3>
                <div className="container d-flex justify-content-between">
                  <div className="col-md-6 text-center">
                    <h4 className="bg-dark p-2 text-light bg-opacity-50">My list</h4>
                    <Viewlist/>





                  </div>
                  <div className="col-md-5" >
                  <h4 className="bg-dark p-2 text-light bg-opacity-50">Add New</h4>
                    
                  <input 
                      type="text"
                      value={noteslist} placeholder="Add New Note"
                      name="question"
                      onChange={(e) => {
                        setNoteslist(e.target.value);
                      }} />
                      <button className="btn btn-dark" onClick={save}>Submit</button>



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
}
