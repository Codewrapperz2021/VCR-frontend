import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

export default function Viewlist() {
    const user_data = useSelector(state => state.login.UserData)
    const [data, setData] = useState([]);
    const user_id = user_data.data.user.id;
    let sno = 1;

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
    return (
        <div>
            <h4 className="bg-dark p-2 text-light bg-opacity-50 text-center">Notes List</h4>
            <table className="table table-striped" border="0">
                {data ? (data.filter(item => item.user_id == user_id)).map((item) => {
                    return <tr className="bg-opacity-50 bg-secondary"> <td>{sno++}</td><td>{item.noteslist}</td> <td className="d-flex justify-content-around">
                        <button className="btn shadow " onClick={() => deleteuser(item.id)}><i class="fas fa-trash-alt text-danger"></i></button>
                        {/* <button className="btn shadow " onClick={() => edituser(item.id)}><i class="fas fa-edit text-dark"></i></button> */}
                    </td></tr>
                }) : ''}
            </table>
        </div>
    )
}
