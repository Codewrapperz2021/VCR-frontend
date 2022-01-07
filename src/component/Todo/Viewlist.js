import React from 'react'
import { useEffect, useState } from "react";

const Viewlist = () => {
    const [data, setData] = useState([]);
    const [noteslist, setNoteslist] = useState("");
    let sno = 1;
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
    return (
        <div>
            <h4 className="bg-dark p-2 text-light bg-opacity-50 text-center">My list</h4>
            <table className="table table-striped" border="0">
                {data.map((item) => (
                    <tr className="bg-opacity-50 bg-secondary">
                        <td className="">{sno++}</td>
                        <td>{item.noteslist}</td>
                        <td className="d-flex justify-content-around">
                            <button className="btn shadow " onClick={() => deleteuser(item.id)}><i class="fas fa-trash-alt text-danger"></i></button>
                            {/* <button className="btn shadow " onClick={() => deleteuser(item.id)}><i class="fas fa-edit text-dark"></i></button> */}
                        </td>
                    </tr>
                ))}
            </table>

        </div>
    )
}

export default Viewlist
