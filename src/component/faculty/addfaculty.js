import { render } from '@testing-library/react';
import facultyservices from '../../services/facultyservices';
import React, {useState,useEffect} from 'react';
import '../../form.css';

export default function Addfaculty() {
  const initialValues = { firstName: "", lastName: "", dob: "", email: "", phone: "" };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false); 

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { first_name: formValues.firstName, last_name: formValues.lastName, email: formValues.email, phone: formValues.phone, dob: formValues.dob } 
    facultyservices.addfaculty(data)
    setformErrors(validate(formValues));
    setIsSubmit(true);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value })
  }
  useEffect(() => {
    if (Object.keys(formErrors).length=== 0&& isSubmit) {
      console.log(formValues);
    }
  }, [formErrors])
  const validate = (values) => {
    
    const errors = {};
    const fname = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
    const lname = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
    const phone = /^([0-9]){10}$/;
    const email = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (!values.firstName){
      errors.firstName = "firstname is required";
    } else if(!fname.test(values.firstName)){
      errors.firstName = "please enter your valid name";
    }
    if (!values.lastName) {
      errors.lastName = "lastname is required";
    }
    else if(!lname.test(values.lastName)){
      errors.lastName = "please enter your valid name";
    }
    if (!values.dob) {
      errors.dob = "dob is required";
    }
    if(!values.email) {
      errors.email = "email is required";
    }else if(!email.test(values.email)){
      errors.email = "please enter valid email";
    }
    if (!values.phone) {
      errors.phone = "phone is required";
    }else if(!phone.test(values.phone)){
      errors.phone = "please enter valid phone number";
    }
    return errors;
  };
  return (
    <div>
      <form onSubmit={ submitHandler }>
        <div className="container pt-5 d-flex justify-content-center" >
          <div className="col-md-6 shadow p-4">
            <h3 className="text-center">Add Faculty</h3>
            <hr />
            <div>
            <label for=""><b>First Name</b></label>
            <input id="fname" name="firstName" type="text" placeholder="Enter your first name" value={formValues.firstName} onChange={handleChange} />
            </div>
            <p style={{color:"red"}}>{formErrors.firstName}</p>
            <div>
            <label for=""><b>Last Name</b></label>
            <input id="lname" name="lastName" type="text" placeholder="Enter your last name" value={formValues.lastName} onChange={handleChange} />
            </div>
            <p style={{color:"red"}}>{formErrors.lastName}</p>
            <div>
            <label for=""><b>Date Of Birth</b></label>
            <input id="dob" name="dob"type="date" min="1980-01-01" max="2004-12-31" placeholder="enter dob" value={formValues.dob} onChange={handleChange} />
            </div>
            <p style={{color:"red"}}>{formErrors.dob}</p>
            <div>
            <label for=""><b>Email</b></label>
            <input id="email" name="email" type="email" placeholder="name@example.com" value={formValues.email} onChange={handleChange} />
            </div>
            <p style={{color:"red"}}>{formErrors.email}</p>      
            <div>
            <label for=""><b>Phone</b></label>
            <input id="phone" type="text" name="phone" placeholder="Enter your phone number" value={formValues.phone} onChange={handleChange} />
            </div>
            <p style={{color:"red"}}>{formErrors.phone}</p>      
            <button id="button" class="registerbtn">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
