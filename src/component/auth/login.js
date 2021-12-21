import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import authservices from '../../services/authservices';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';
import '../../form.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const data = useSelector(state => state.UserData)
    const dispatch = useDispatch();
    let navigate = useNavigate();

    function showadminDash() {
        navigate('/admindashboard')
    }

    function showstudentDash() {
        navigate('/studentdashboard')
    }

    function showteacherDash() {
        navigate('/teacherdashboard')
    }


    const submitHandler = (e) => {
        e.preventDefault();
        const data = { email: email, password: password }
        authservices.login(data).then((res) => {
            if (res.data.user.email === data.email &&res.data.user.role === 'admin') {
                swal("Logged In!", "Welcome to Admin Dashboard!", "success", {
                    buttons: false,
                    timer: 2000,
                });
                let name=res.data
               dispatch({ type: 'LOGIN', payload: name })
                showadminDash()
            }
            else if
                 (res.data.user.email === data.email && res.data.user.role === 'teacher') {
                    swal("Logged In!", "Welcome to Admin Dashboard!", "success", {
                        buttons: false,
                        timer: 2000,
                       
                    });
                    let name=res.data
                   dispatch({ type: 'LOGIN', payload: name })
                    showteacherDash()
            }
          else if
            (res.data.user.email === data.email && res.data.user.role === 'student') {
               swal("Logged In!", "Welcome to Admin Dashboard!", "success", {
                   buttons: false,
                   timer: 2000,
                  
               });
               let name=res.data
              dispatch({ type: 'LOGIN', payload: name })
               showstudentDash()
       }
       else{
           alert('error');
       }
        })
                    
    }
    return (
        
        <div>
            <div className='container'>
                <div className='row d-flex justify-content-between'>
                    <div className='col-md-5 '>
                        <div className='text-center ' >
                            <h2 className='login'>Virtual Classr<span><img className='loginlogo logo_image ' src="images/Rclogo.jpg" alt="" /></span><span><img className='loginlogo logo_image ' src="images/Rclogo.jpg" alt="" /></span>m</h2>
                            <p className='text'>Helps to easily manage virtual classes, online attendence and managing timetable and marks </p>                      
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <form onSubmit={(e) => { submitHandler(e) }}>
                            <div className="container pt-5  d-flex justify-content-center" >

                                <div className="col-md-8  shadow p-5">

                                    <div>
                                        <label for=""><b>Email</b></label>
                                        <input id="email" name="email" type="email" placeholder="Enter your email id" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div>
                                        <label for=""><b>Password</b></label>
                                        <input id="password" name="password" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button id="button" class="loginbtn" >LOGIN</button>
                                    <div className='text-center'>
                                        <a class="forgetbtn" href="/forget-password">forget password ?</a>
                                        <hr />
                                        <a id="button" href="/register" class="logresbtn" >Register</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

