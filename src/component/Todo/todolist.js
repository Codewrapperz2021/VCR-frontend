import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

export default function Todolist() {
  const user_data = useSelector(state => state.login.UserData)
  const [data, setData] = useState([]);
  const [noteslist, setNoteslist] = useState("");
  let sno = 1;
  const user_id = user_data.data.user.id;

  useEffect(() => {
    refr();
  }, []);
  function refr() {
    fetch("http://localhost:8000/api/todo/").then((result) => {
      result.json().then(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].user_id == user_id) {
            setData(res);
          }
        }
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
    let data = { noteslist, user_id };
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
    <main>
      <div className="container d-flex justify-content-center">
        <div className="col-md-12  text-center">
          <h3>My NoteBook</h3>
          <div className="container d-flex justify-content-between">
            <div className="col-md-6 text-center">
              <div>
                <h4 className="bg-dark p-2 text-light bg-opacity-50 text-center">Notes list</h4>
                <table className="table table-striped" border="0">
                  {data ? (data.filter(item => item.user_id == user_id)).map((item) => {
                    return <tr className="bg-opacity-50 bg-secondary"> <td>{sno++}</td><td>{item.noteslist}</td> <td className="d-flex justify-content-around">
                      <button className="btn shadow " onClick={() => deleteuser(item.id)}><i class="fas fa-trash-alt text-danger"></i></button>
                      {/* <button className="btn shadow " onClick={() => edituser(item.id)}><i class="fas fa-edit text-dark"></i></button> */}
                    </td></tr>
                  }) : ''}
                </table>
              </div>
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
  );
}
