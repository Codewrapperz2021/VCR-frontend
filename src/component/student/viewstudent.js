import React, { useState, useEffect } from 'react'
import Deletestudent from './deletestudent';
import studentservices from '../../services/studentservices';
import Navbar from '../masterdas/navbar';
import Adminsidebar from '../masterdas/adminsidebar';
import Footer from '../masterdas/footer';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function Viewstudent() {
  const data = useSelector(state => state.UserData)
  const token = (token)=>{
    axios.interceptors.request.use(function (config){
        const token = data.data.token
        console.log(token)
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
    })
}

  const [persons, setPersons] = useState([]);
  useEffect(() => {
    token();
    studentservices.viewstudent()
      .then(res => {
        const persons = res.data;
        setPersons(persons);
      })
  }, [])

  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Adminsidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
          <h2 class="text-center " > Student list</h2>
            <table id='content' className="table table-bordered mx-2 my-2">
              <thead>
                <tr className="table-info ">
                  <th scope="col-2">S.no.</th>
                  <th scope="col-2">First Name</th>
                  <th scope="col-2">Last Name</th>
                  <th scope="col-3">Email</th>
                  <th scope="col-3">Course</th>
                  <th scope="col-3">Contact</th>
                  <th scope="col-3">Address</th>
                  <th scope="col-2">Action</th>

                </tr>
              </thead>
              <tbody>
                {persons.map(person => <tr>
                  <td>{person.id}</td>

                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                  <td> {person.email}</td>
                  <td> {person.cname}</td>
                  <td>{person.phone}</td>
                  <td>{person.address}</td>
                  <td><Deletestudent id={person.id} /> &nbsp;
                    <Link to={"/updatestudent/" + person.id}>
                      <button class="btn btn-primary">Edit</button>
                    </Link></td>
                </tr>)
                }
              </tbody>
            </table>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}


