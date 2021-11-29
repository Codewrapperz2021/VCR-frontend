import subjectservices from '../../services/subjectservices';
import React, { useState,useEffect } from 'react';
import courseservices from '../../services/courseservices';
import '../../form.css'
export default function Addsubjct() {
    const  initialValues={sname:"",scode:""};
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const[isSubmit , setIsSubmit]=useState(false);
    const [courses,setCourses]=useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        const data = { sname: formValues.sname, subject_code: formValues.scode }
        subjectservices.addsubject(data)
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
    useEffect(()=>{
        
        courseservices.viewcourse()
        .then(res=>{
      const courses = res.data;
      setCourses(courses);
        })
        
    },[])
    const validate=(values)=>{
        const errors={};
        if(!values.sname){
            errors.sname="subject name is required";
        }
        if(!values.scode){
            errors.scode="subject code name is required";
        }
        return errors
    }
    return (
        <div>
            <form onSubmit={(e) => { submitHandler(e) }}>
                <div className="container pt-5 d-flex justify-content-center" >
                    <div className="col-md-6 shadow p-4">
                        <h3 className="text-center">Add Subject</h3>
                        <hr />
                        <div>
                            <select>
                                {courses.map(course=>
                                   <option value={courses.cname}>{course.cname}</option>
                                   )}
                            </select>
                        </div>
                        <div>
                        <label for=""><b>Subject Name</b></label>
                        <input id="sname" name="sname" type="text" placeholder="Enter your subject name" value={formValues.sname} onChange={handleChange} />
                        </div>
                        <p style={{color:"red"}}>{formErrors.sname}</p>
                        <div>
                        <label for=""><b>Subject Code</b></label>
                        <input id="subject_code" type="text" placeholder="Enter your subject code" value={formValues.scode} onChange={handleChange} />
                        </div>
                        <p style={{color:"red"}}>{formErrors.scode}</p>
                        <button id="button" class="registerbtn" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
