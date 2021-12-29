import authservices from '../../services/authservices';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';
import '../../form.css'
import { useNavigate } from 'react-router';
export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [file, setProfile] = useState(null);
  console.log(role)
  const submitHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name",name)
    formdata.append("email",email)
    formdata.append('role',role)
    formdata.append('password',password)
    formdata.append('file',document.getElementById('file').files[0])
    // const data = { name: name, email: email,role:role, password: password, profileimage:document.getElementById('file').files[0] }
    if(role!=='select'){
    
    authservices.register(formdata).then((res) => {
      navigate('/')
      swal("Successfully Registred!", "Login to access Dashboard!", "success", {
        buttons: false,
        timer: 2000,

      });
      console.log(res)
    })
  }else{
    alert('select role')
  }
  }

  return (
    <div>
      <form enctype="multipart/form-data" onSubmit={(e) => { submitHandler(e) }}>
        <div className="container pt-5 d-flex justify-content-center" >
          <div className="col-md-6 shadow p-4">
            <h3 className="text-center">Register</h3>
            <hr />
            <label for=""><b>Name</b></label>
            <input id="name" type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            <label for=""><b>Email</b></label>
            <input id="email" type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />

            <label for=""><b>Select Role</b></label>
            <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
            <option value="select">select</option>

              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
            
            <label for=""><b>Password</b></label>
            <input id="password" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />

            <label for=""><b>Profile Image</b></label>
            <input type="file" name="file" id="file" onChange={(e) => setProfile(e.target.files[0])} />
            


            <button id="button" class="registerbtn"  >Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}