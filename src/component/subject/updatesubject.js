import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import subjectservices from '../../services/subjectservices';

export default class Updatesubject extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    sname:'',
    subject_code:'',
  }
  this.handlesname=this.handlesname.bind(this);
  this.handlesubject_code=this.handlesubject_code.bind(this);





  }
  handlesname = e => {
      
      console.log(e.target.value)
     
      this.setState({sname:e.target.value})
     
  }
  handlesubject_code = e => {
      
    console.log(e.target.value)
   
    this.setState({subject_code:e.target.value})
  }
  
  handlesubmit =() => {
       const id = window.location.pathname.substring(15,25)
    console.log(this.state);
    var subject =this.state
    subjectservices.updatesubject(id,subject)
      .then(res => {
        console.log(res.data)
      })
      .catch(err=>console.log(err))
    // this.props.onUpdate();
  }

  componentDidMount(){
   const id = window.location.pathname.substring(15,25)
   subjectservices.subjectById(id)
   .then(res =>   this.setState({id:id,sname:res.data.sname,subject_code:res.data.subject_code}))

  }
  render() {
      const person=this.state;
    return (
    <>
          <div className="container pt-5 d-flex justify-content-center" >
          <div className="col-md-6 shadow p-4">
            <h3 className="text-center">Update Student</h3>

            <hr />
            <label for=""><b>Subject Name</b></label>
            <input type="text" name='sname' defaultValue={person.sname} onChange={this.handlesname} />
            <label for=""><b>Subject Code</b></label>
            <input type="text" name='subject_code' value={person.subject_code} onChange={this.handlesubject_code} />
            <input id="button" type="submit" class="registerbtn" value="Update" onClick={()=>this.handlesubmit()}></input>

          </div>
        </div>
          {/* <label>
            Student Name:
            <input type="text" name='sname' defaultValue={person.sname} onChange={this.handlesname} />
          </label>
          <label>
            Last Name:
            <input type="text" name='subject_code' value={person.subject_code} onChange={this.handlesubject_code} />
          </label>
          
          <button className="btn btn-primary" onClick={()=>this.handlesubmit()}>Update</button> */}
    </>
    );
  }
}
// export default  withRouter(Updatefaculty);