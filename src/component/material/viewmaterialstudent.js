import '../../App.css';
import '../../form.css';
import '../script';
import { Link } from 'react-router-dom';
import materialservices from '../../services/materialservices';
import studentservices from '../../services/studentservices';
import Navbar from '../masterdas/navbar';
import Studentsidebar from '../masterdas/studentsidebar';
import Footer from '../masterdas/footer';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';


export default function Viewmaterialstudent() {
    const [materials, setMaterials] = useState([]);
    const [course, setCourse] = useState();
    let sno = 1;
    console.log(course)
    useEffect(() => {
        studentservices.viewstudent()
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].email == data.data.user?.email) {
                        setCourse(res.data[i]?.cname)
                    }
                }
            })
        materialservices.viewmaterial()
            .then(res => {
                const material = res.data;
                setMaterials(material);
            })
    }, [])
    const data = useSelector(state => state.login.UserData)

    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Studentsidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <h2 class="text-center"> Material list</h2>
                        <table class="table table-bordered mx-2 my-2">
                            <thead>
                                <tr class="table-info">
                                    <th scope="col-2">S.no.</th>
                                    <th scope="col-2">Course</th>
                                    <th scope="col-2">Material</th>
                                    <th scope="col-2">Discription</th>
                                </tr>
                            </thead>
                            <tbody>
                                {course ? (materials.filter(material => material.course == course)).map((mat) => {
                                    return (<tr>
                                        <td>{sno++}</td>
                                        <td>{mat.course}</td>
                                        <Link
                                            to="route"
                                            onClick={(event) => { event.preventDefault(); window.open(`http://localhost:8000/notes/${mat.material}`); }}>
                                            {mat.material}
                                        </Link>
                                        <td>{mat.comment}</td>
                                    </tr>)
                                }) : ''}
                            </tbody>
                        </table>
                        <center><Link to="/admindashboard">Click to Dashboard</Link></center>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

