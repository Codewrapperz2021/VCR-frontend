import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import '../../form.css';
import axios from 'axios'
import { useSelector } from 'react-redux';

import authservices from '../../services/authservices'

export default function Changepassword() {
    const navigate = useNavigate();
    const data = useSelector(state => state.UserData)
    const [oldpassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const token = (token)=>{
        axios.interceptors.request.use(function (config){
            const token = data.data.token
            console.log(token)
            config.headers.Authorization = token ? `Bearer ${token}` : '';
            return config;
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        token();
        const data = { old_password:oldpassword,confirm_password: cpassword, password: password }
        authservices.changepassword(data).then((res) => {
            navigate('/')
        });
    }
    return (
        <div>
        <form enctype="multipart/form-data" onSubmit={(e) => { submitHandler(e) }}>
          <div className="container pt-5 d-flex justify-content-center" >
            <div className="col-md-6 shadow p-4">
              <h3 className="text-center">Change Password</h3>
              <hr />
              <label for=""><b>Old Password</b></label>
              <input id="oldpassword" type="text" placeholder="Enter the old password" onChange={(e) => setOldPassword(e.target.value)} />
              
              <label for=""><b>New Password</b></label>
              <input id="passowrd" type="text" placeholder="Enter the new password" onChange={(e) => setPassword(e.target.value)} />
              <label for=""><b>Password</b></label>

              <input id="password" type="password" placeholder="Enter the new passowrd again" onChange={(e) => setCPassword(e.target.value)} />
  
              <button id="button" class="registerbtn"  >Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
}