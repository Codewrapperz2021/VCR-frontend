import subjectservices from '../../services/subjectservices';
import React, { useState, useEffect } from 'react';
import courseservices from '../../services/courseservices';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import '../../form.css'
export default function Addsubjct() {
    const initialValues = { sname: "", subject_code: "", coursename:""};
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [courses, setCourses] = useState([]);
    

    const submitHandler = (e) => {
        e.preventDefault();
       
        const data = { sname: formValues.sname, subject_code: formValues.subject_code ,course_id:formValues.coursename}

        for(let i=0;i<courses.length;i++)
        {
               if(courses[i].cname===data.course_id)
               {
                     data.course_id=courses[i].id;
                     subjectservices.addsubject(data).then(res => {
                        swal("Added", "details added successfully", "success", {
                          buttons: false,
                          timer: 2000,
                        });
                      })
              
               }
               setformErrors(validate(formValues));
               setIsSubmit(true);
            }
        
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
       
        setformValues({ ...formValues, [name]: value })
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors])

    useEffect(() => {
        courseservices.viewcourse()
            .then(res => {
                setCourses(res.data);
            })
    }, [])
    const validate = (values) => {
        const errors = {};
        if (!values.sname) {
            errors.sname = "subject name is required";
        }
        if (!values.subject_code) {
            errors.subject_code = "subject code name is required";
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
                        <label for=""><b>Select subject</b></label>
                        <div>
                            <select  name="coursename" value={formValues.coursename} onChange={handleChange}>
                                {courses.map(course =>
                                    <option  value={course.cname} >{course.cname}</option>
                                )}
                            </select>
                        </div>
                        <br/>
                        <div>
                            <label for=""><b>Subject Name</b></label>
                            <input id="sname" name="sname" type="text" placeholder="Enter your subject name" value={formValues.sname} onChange={handleChange} />
                        </div>
                        <p style={{ color: "red" }}>{formErrors.sname}</p>
                        <div>
                            <label for=""><b>Subject Code</b></label>
                            <input id="subject_code" name="subject_code" type="text" placeholder="Enter your subject code" value={formValues.subject_code} onChange={handleChange} />
                        </div>
                        <p style={{ color: "red" }}>{formErrors.subject_code}</p>
                        <button id="button" class="addbtn" >Submit</button>
                        <center><Link  to="/admindashboard">Click to Dashboard</Link></center>
                    </div>
                </div>
            </form>
        </div>
    )
}
