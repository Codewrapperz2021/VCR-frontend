import React, { useState,useEffect } from 'react';
import authservices from '../../services/authservices';
import swal from 'sweetalert';
import '../../form.css'

export default function Forget() {
  const [email, setEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const data ={email:email}
    authservices.forgotpassword(data).then((res) => {
      console.log(res)
    });
  }
    return (
            <div>
            <form onSubmit={(e) => { submitHandler(e)}} >
              <div className="container pt-5 d-flex justify-content-center" >
                <div className="col-md-6 shadow p-4">
                  <h3 className="text-center">Forget password</h3>
                  <hr />
                    <label for=""><b>Email</b></label>
            <input id="email" type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                  <button id="button" class="registerbtn"  >Submit</button>
                </div>
              </div>
           </form>
        </div>
    )
}
