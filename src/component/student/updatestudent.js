import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import studentservices from '../../services/studentservices';

export default class Updatestudent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    first_name:'',
    last_name:'',
    address:'',
    email:'',
    phone:'',
  }
  this.handlefname=this.handlefname.bind(this);
  this.handlelname=this.handlelname.bind(this);
  this.handleaddress=this.handleaddress.bind(this);
  this.handleemail=this.handleemail.bind(this);
  this.handlephone=this.handlephone.bind(this);
  this.handlesubmit=this.handlesubmit.bind(this);




  }
    handlefname = e => {
      
      console.log(e.target.value)
     
      this.setState({first_name:e.target.value})
     
  }
  handlelname = e => {
      
    console.log(e.target.value)
   
    this.setState({last_name:e.target.value})
  }
  handleaddress = e => {
      
    console.log(e.target.value)
   
    this.setState({address:e.target.value})
  }
  handleemail = e => {
      
    console.log(e.target.value)
   
    this.setState({email:e.target.value})
  }
  handlephone = e => {
      
    console.log(e.target.value)
   
    this.setState({phone:e.target.value})
  }
  handlesubmit =() => {
       const id = window.location.pathname.substring(15,25)
    console.log(this.state);
    var student =this.state
    studentservices.updatestudent(id,student)
      .then(res => {
        console.log(res.data)
      })
      .catch(err=>console.log(err))
    // this.props.onUpdate();
  }

  componentDidMount(){
   const id = window.location.pathname.substring(15,25)
   studentservices.studentById(id)
   .then(res =>   this.setState({id:id,first_name:res.data.first_name,last_name:res.data.last_name,address:res.data.address,phone:res.data.phone,email:res.data.email}))

  }
  render() {
      const person=this.state;
    return (
    <>
      
          <label>
            First Name:
            <input type="text" name='first_name' defaultValue={person.first_name} onChange={this.handlefname} />
          </label>
          <label>
            Last Name:
            <input type="text" name='last_name' value={person.last_name} onChange={this.handlelname} />
          </label>
          <label>
            Email:
            <input type="text" name='email' value={person.email} onChange={this.handleemail} />
          </label>
          <label>
            phone:
            <input type="text" name='phone' value={person.phone} onChange={this.handlephone} />
          </label>
          <label>
           dob:
            <input type="text" name='address' value={person.address} onChange={this.handleaddress}/>
          </label>
          <button className="btn btn-primary" onClick={()=>this.handlesubmit()}>Update</button>
    </>
    );
  }
}
// export default  withRouter(Updatefaculty);