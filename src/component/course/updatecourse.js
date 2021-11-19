import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import courseservices from '../../services/courseservices';

export default class Updatecourse extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    cname:'',
    
  }
  this.handlecname=this.handlecname.bind(this);
 
  this.handlesubmit=this.handlesubmit.bind(this);




  }
    handlecname = e => {
      
      console.log(e.target.value)
     
      this.setState({cname:e.target.value})
     
  }
  
  handlesubmit =() => {
       const id = window.location.pathname.substring(14,25)
    console.log(this.state);
    var course =this.state
    courseservices.updatecourse(id,course)
      .then(res => {
        console.log(res.data)
      })
      .catch(err=>console.log(err))
    // this.props.onUpdate();
  }

  componentDidMount(){
   const id = window.location.pathname.substring(14,25)
   courseservices.courseById(id)
   .then(res =>   this.setState({id:id,cname:res.data.cname}))

  }
  render() {
      const person=this.state;
    return (
    <>
          <div className="container pt-5 d-flex justify-content-center" >
          <div className="col-md-6 shadow p-4">
            <h3 className="text-center">Update Course</h3>

            <hr />
            <label for=""><b>Course Name</b></label>
            <input type="text" name='cname' defaultValue={person.cname} onChange={this.handlecname} />
            <input id="button" type="submit" class="registerbtn" value="Update" onClick={()=>this.handlesubmit()}></input>

          </div>
        </div>
          {/* <label>
            Course Name:
            <input type="text" name='cname' defaultValue={person.cname} onChange={this.handlecname} />
          </label>
          
          <button className="btn btn-primary" onClick={()=>this.handlesubmit()}>Update</button> */}
    </>
    );
  }
}
// export default  withRouter(Updatecourse);