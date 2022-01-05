import React, { useState, useEffect } from 'react'
import Deletematerial from './deletematerial';
import materialservices from '../../services/materialservices';
import Navbar from '../masterdas/navbar';
import Teachersidebar from '../masterdas/teachersidebar';
import Footer from '../masterdas/footer';
import { Link } from 'react-router-dom';

export default function Viewmaterial() {
  const [materials, setMaterials] = useState([]);
  let sno = 1;
  useEffect(() => {
    materialservices.viewmaterial()
      .then(res => {
        const material = res.data;
        setMaterials(material);
      })
  }, [])
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Teachersidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="table-responsive mx-2 my-2">
              <h2 class="text-center">Material list</h2>
              <table class="table table-bordered ">
                <thead>
                  <tr class="table-info">
                    <th scope="col-2">S.no.</th>
                    <th scope="col-2">Course</th>
                    <th scope="col-2">Material</th>
                    <th scope="col-2">Comment</th>
                    <th scope="col-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map(mat => <tr>
                    <td>{sno++}</td>
                    <td>{mat.course}</td>
                    <Link
                      to="route"
                      onClick={(event) => { event.preventDefault(); window.open(`http://localhost:8000/notes/${mat.material}`); }}>
                      {mat.material}
                    </Link>
                    <td>{mat.comment}</td>
                    <td><Deletematerial id={mat.id} /> &nbsp;
                    </td>
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
  )
}
