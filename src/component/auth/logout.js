import React,{useEffect} from 'react'
import axios from 'axios';
import authservices from '../../services/authservices';

import { useNavigate } from 'react-router'

export default function Logout() {
    const history =useNavigate();
    useEffect(() => {
        // axios.post('http://localhost:8000/api/logout',localStorage.getItem('token')).then((res)=>{console.log(res)})
         
    authservices.logout(localStorage.getItem('token'))
        console.log(localStorage.getItem('token'))
        // localStorage.removeItem('token');
        history('/')
    }, [])
    return (
        <div>
            Logout
        </div>
    )
}
