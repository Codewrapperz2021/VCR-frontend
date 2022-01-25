import React,{useEffect} from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import authservices from '../../services/authservices';

import { useNavigate } from 'react-router'
import { EMPTY } from '../../actions/action';

export default function Logout() {
    
    const history =useNavigate();
    
    useEffect(() => {
       
         
    authservices.logout(localStorage.getItem('token'))
        console.log(localStorage.getItem('token'))
       
        // localStorage.removeItem('token');
        // history('/')
    }, [])
    return (
        <div>
         
        </div>
    )
}

