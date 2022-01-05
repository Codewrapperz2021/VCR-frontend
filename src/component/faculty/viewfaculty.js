import React, { useState, useEffect } from 'react'
import Deletefaculty from './deletefaculty';
import facultyservices from '../../services/facultyservices';
import { Link } from 'react-router-dom';
import Navbar from '../masterdas/navbar';
import Adminsidebar from '../masterdas/adminsidebar';
import Footer from '../masterdas/footer';

export default function Viewfaculty() {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        facultyservices.viewfaculty()
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
                    <div className="table-responsive mx-2 my-2">
                    <h2 class="text-center " > Faculty list</h2>
                        <table class="table table-bordered ">
                            <thead>
                                <tr class="table-info">
                                    <th scope="col-2">S.no.</th>
                                    <th scope="col-2">First Name</th>
                                    <th scope="col-2">Last Name</th>
                                    <th scope="col-3">Email</th>
                                    <th scope="col-3">Contact</th>
                                    <th scope="col-3">dob</th>
                                    <th scope="col-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {persons.map(person => <tr>
                                    <td>{person.id}</td>
                                    <td>{person.first_name}</td>
                                    <td>{person.last_name}</td>
                                    <td> {person.email}</td>
                                    <td>{person.phone}</td>
                                    <td>{person.dob}</td>
                                    <td><Deletefaculty id={person.id} /> &nbsp;
                                        <Link to={"/updatefaculty/" + person.id}>
                                            <button class="btn btn-primary">Edit</button>
                                        </Link></td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};
