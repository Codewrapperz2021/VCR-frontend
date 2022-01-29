import React, { useEffect } from 'react';
import authservices from '../../services/authservices';
import '../../App.css';
import '../script';
import swal from 'sweetalert';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { EMPTY } from '../../actions/action';
export default function Navbar() {
    const dispatch = useDispatch();

    const data = useSelector(state => state.login.UserData)
    useEffect(() => {
        axios.interceptors.request.use(function (config) {
            const token = data.data.token
            config.headers.Authorization = token ? `Bearer ${token}` : '';
            return config;
        })
    }, []);
    
    const logout = (token) => {
        authservices.logout(data).then((res) => {
            window.location.href = "/";
            dispatch({type:EMPTY})
            swal("Logged Out!", "Login to access Dashboard!", "success", {
                buttons: false,
                timer: 2000,
            });
        });
    }
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <img style={{ width: "200px", padding: "10px" }} src="images/logo.png" alt="" />
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars navbar-logo"></i></button>
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                </div>
            </form>
            <button type="button" class="btn btn-warning ">{data.data.user.name}</button>
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img className='profile' src={`http://localhost:8000/images/profilephoto/${data.data.user.profileimage}`}/></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><button className="dropdown-item" onClick={()=>logout(data.data.token)}>Logout</button></li>
                                <li className="dropdown-item "><Link to="/change-password/" style={{color:"black"}} className='missing'>Change Password</Link></li>
                                <li className="dropdown-item" ><Link to={"/change-profile/"+ data.data.user.id} style={{color:"black"}} className='missing'>Edit Profile</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};


