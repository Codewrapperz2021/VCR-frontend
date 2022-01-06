
import React, { useEffect, useState } from "react";
import Navbar from "../masterdas/navbar";
import Studentsidebar from "../masterdas/studentsidebar";
import Footer from "../masterdas/footer";

export default function Todolist() {
  const [data, setData] = useState([]);
  const [noteslist, setNoteslist] = useState("");
 

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
    let data = { noteslist};
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
                    <table className="table table-striped" border="0">

                      {data.map((item) => (
                        <tr className="bg-opacity-50 bg-secondary">
                          <td className="">{item.id}</td>
                          <td>{item.noteslist}</td>
                          <td className="d-flex justify-content-around">
                            <button className="btn shadow " onClick={() => deleteuser(item.id)}><i class="fas fa-trash-alt text-danger"></i></button>
                            <button className="btn shadow " onClick={() => deleteuser(item.id)}><i class="fas fa-edit text-dark"></i></button>
                          </td>
                        </tr>
                      ))}
                    </table>





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
