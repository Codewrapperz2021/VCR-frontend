import lectureservices from '../../services/lectureservices';
import React, { useState,useEffect } from 'react';
import '../../form.css';
export default function Addlecture() {
    const  initialValues={lect_name:"",lect_time:""};
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const[isSubmit , setIsSubmit]=useState(false);
    
   

    const submitHandler = (e) => {
        e.preventDefault();
        const data = { lect_name: formValues.lect_name,lect_time: formValues.lect_time}
        lectureservices.addlecture(data)
        
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
        if(!values.lect_name){
            errors.lect_name="lecture name is required";
        }
        if(!values.lect_time){
            errors.lect_time="lecture time is required";
        }
        return errors
    }
    
    return (
        <div>
            <form onSubmit={(e) => { submitHandler(e) }}>
                <div className="container pt-5 d-flex justify-content-center" >
                    <div className="col-md-6 shadow p-4">
                        <h3 className="text-center">Add lecture time</h3>
                        <hr />
                        
                        <div>
                        <label for=""><b>lecture Name</b></label>
                        <input id="lect_name"name="lect_name" type="text" placeholder="Enter the lecture name" value={formValues.lect_name} onChange={handleChange} />
                        </div>
                        <p style={{color:"red"}}>{formErrors.lect_name}</p>
                        <div>
                        <label for=""><b>lecture time</b></label><br></br>
                        <input id="lect_time"name="lect_time" type="time" placeholder="Enter the lecture time" value={formValues.lect_time} onChange={handleChange} />
                        </div>
                        <p style={{color:"red"}}>{formErrors.lect_time}</p>
                        <button id="button" class="addbtn">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
