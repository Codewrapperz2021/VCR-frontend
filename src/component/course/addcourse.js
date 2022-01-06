import courseservices from '../../services/courseservices';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import '../../form.css';
export default function Addcourse() {
    const  initialValues={cname:""};
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const[isSubmit , setIsSubmit]=useState(false);
    


    const submitHandler = (e) => {
        e.preventDefault();
        const data = { cname: formValues.cname}
        courseservices.addcourse(data).then(res => {
            swal("Added", "details added successfully", "success", {
              buttons: false,
              timer: 2000,
            });
          })
        
        setformErrors(validate(formValues));
        setIsSubmit(true);

        }
    
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setformValues({...formValues,[name]:value})
    }
    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])
    const validate=(values)=>{
        const errors={};
        const regex =/^[a-z ,.'-]+$/i;
        if(!values.cname){
            errors.cname="course name is required";
        }
        return errors
    }
    
    return (
        <div>
            <form onSubmit={(e) => { submitHandler(e) }}>
                <div className="container pt-5 d-flex justify-content-center" >
                    <div className="col-md-6 shadow p-4">
                        <h3 className="text-center">Add Cource</h3>
                        <hr />
                        
                        <div>
                        <label for=""><b>Cource Name</b></label>
                        <input id="cname"name="cname" type="text" placeholder="Enter the cource name" value={formValues.cname} onChange={handleChange} />
                        </div>
                        <p style={{color:"red"}}>{formErrors.cname}</p>
                        <button id="button" class="addbtn" >Submit</button>
                        <center><Link  to="/admindashboard">Click to Dashboard</Link></center>
                    </div>
                </div>
            </form>
        </div>
    )
}
