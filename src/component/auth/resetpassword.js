// import React, { useState } from 'react'
import React, { useState, useEffect } from 'react'

import authservices from '../../services/authservices';
import {useParams} from 'react-router-dom';
import swal from 'sweetalert';


export default function Resetpassword() {
  const [token,setToken] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
  var url = new URL(window.location);
  setToken(url.searchParams.get("token"));
  }, [])
  const [password_confirmation, setCPassword] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
  const data = {email: email,token:token,password: password, password_confirmation:password_confirmation}
  authservices.resetpassword(data).then((res) => {
   
    swal("Password has been changed successfuly!", "Login to access the dashboard!", "success", {
      buttons: false,
      timer: 6000,

    });
    window.location.href = "/";
    console.log(res)
  });
  }
    return (
        <div>
           <div>
            <form onSubmit={(e) => { submitHandler(e)}}>
              <div className="container pt-5 d-flex justify-content-center" >
                <div className="col-md-6 shadow p-4">
                  <h3 className="text-center">Reset Password</h3>
                  <hr />
                  <label for=""><b>Email</b></label>
            <input id="email" type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                  <label for=""><b>Enter new password</b></label>
                  <input id="name" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                  <label for=""><b>Confirm new Password</b></label>
                  <input id="password" type="password" placeholder="Enter your password again" onChange={(e) => setCPassword(e.target.value)} />
                  <button id="button" class="registerbtn"  >Submit</button>
                </div>
              </div>
           </form>
      </div> 
        </div>
    )
}
