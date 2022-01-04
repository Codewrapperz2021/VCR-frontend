import studentservices from '../../services/studentservices';
import courseservices from '../../services/courseservices';
import React, { useState, useEffect } from 'react';
import '../../form.css'
export default function Addstudent() {
  const initialValues = { firstName: "", lastName: "", address: "", email: "", phone: "" ,coursename:"",roll:"",collage:""};
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [courses, setCourses] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { course_id:formValues.coursename, first_name: formValues.firstName, last_name: formValues.lastName, email: formValues.email, phone: formValues.phone, address: formValues.address,roll:formValues.roll,collage:formValues.collage }
    for(let i=0;i<courses.length;i++)
    {
           if(courses[i].cname===data.course_id)
           {
                 data.course_id=courses[i].id;
                 studentservices.addstudent(data)
          
           }
           setformErrors(validate(formValues));
           setIsSubmit(true);
        }
    
}
    //   studentservices.addstudent(data)
  //   setformErrors(validate(formValues));
  //   setIsSubmit(true);
  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value })
  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
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
    let fname = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
    let lname = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
    let phone = /^([0-9]){10}$/;
    let email = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let collage = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
    let roll = /^([0-9]){10}$/;
    if (!values.firstName) {
      errors.firstName = "first name is required*";
    } else if (!fname.test(values.firstName)) {
      errors.firstName = "please enter your valid name";
    }
    if (!values.lastName) {
      errors.lastName = "last name is required*";
    }
    else if (!lname.test(values.lastName)) {
      errors.lastName = "please enter your valid name";
    }
    if (!values.address) {
      errors.address = "address is required*";
    }
    if (!values.email) {
      errors.email = "email is required*";
    } else if (!email.test(values.email)) {
      errors.email = "please enter valid email";
    }
    if (!values.phone) {
      errors.phone = "phone is required*";
    } else if (!phone.test(values.phone)) {
      errors.phone = "please enter valid phone number";
    }
    if (!values.roll) {
      errors.roll = "roll no is required*";
    } else if (!roll.test(values.roll)) {
      errors.roll = "please enter valid roll number";
    }
    if (!values.collage) {
      errors.collage = "collage is required*";
    } else if (!collage.test(values.collage)) {
      errors.collage = "please enter valid collage";
    }
    return errors
  }
  return (
    <div>
      <form onSubmit={(e) => { submitHandler(e) }}>
        <div className="container pt-5 d-flex justify-content-center" >
          <div className="col-md-6 shadow p-4">
            <h3 className="text-center">Add Student</h3>
            <hr />
            <div>
              <select className='select_drop' name="coursename" value={formValues.coursename} onChange={handleChange}>
                {courses.map(course =>
                  <option value={course.cname} >{course.cname}</option>
                )}
              </select>
            </div>
            <div>
              <label for=""><b>First Name*</b></label>
              <input id="fname" name="firstName" type="text" placeholder="Enter your first name" value={formValues.firstName} onChange={handleChange} />
            </div>
            <p style={{ color: "red" }}>{formErrors.firstName}</p>
            <div>
              <label for=""><b>Last Name*</b></label>
              <input id="lname" name="lastName" type="text" placeholder="Enter your last name" value={formValues.lastName} onChange={handleChange} />
            </div>
            <p style={{ color: "red" }}>{formErrors.lastName}</p>
            <div>
              <label for=""><b>Address*</b></label>
              <input id="address" name="address" type="text" placeholder="enter address" value={formValues.address} onChange={handleChange} />
            </div>
            <p style={{ color: "red" }}>{formErrors.address}</p>
            <div>
              <label for=""><b>Email*</b></label>
              <input id="email" name="email" type="email" placeholder="name@example.com" value={formValues.email} onChange={handleChange} />
            </div>
            <p style={{ color: "red" }}>{formErrors.email}</p>
            <div>
              <label for=""><b>Phone*</b></label>
              <input id="phone" type="text" name="phone" placeholder="Enter your phone number" value={formValues.phone} onChange={handleChange} />
            </div>
            <p style={{ color: "red" }}>{formErrors.phone}</p>
            <div>
              <label for=""><b>Roll no*</b></label>
              <input id="roll" type="text" name="roll" placeholder="Enter your roll number" value={formValues.roll} onChange={handleChange} />
            </div>
            <p style={{ color: "red" }}>{formErrors.roll}</p>
            <div>
              <label for=""><b>collage*</b></label>
              <input id="collage" type="text" name="collage" placeholder="Enter your collage" value={formValues.collage} onChange={handleChange} />
            </div>
            <p style={{ color: "red" }}>{formErrors.collage}</p>
            <button id="button" class="addbtn">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}