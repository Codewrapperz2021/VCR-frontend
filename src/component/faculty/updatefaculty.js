import React from 'react';
import axios from 'axios';
import facultyservices from '../../services/facultyservices';

export default class Updatefaculty extends React.Component {
  state = {
      person:this.props.person
  }
  handleChange = e => {
      const {person}=this.state;
      person[e.target.name]=e.target.value;
      this.setState({person});
  }

  handleEdit =() => {
    facultyservices.updatefaculty()
      .then(res => {
      });
    this.props.onUpdate();
  }

  render() {
      const {person}=this.state;
    return (
    <>
          <label>
            First Name:
            <input type="text" name='first_name' value={person.first_name} onChange={(e)=>this.handleChange(e)} />
          </label>
          <label>
            Last Name:
            <input type="text" name='last_name' value={person.last_name} onChange={(e)=>this.handleChange(e)} />
          </label>
          <label>
            Email:
            <input type="text" name='email' value={person.email}  onChange={(e)=>this.handleChange(e)} />
          </label>
          <label>
            phone:
            <input type="text" name='phone' value={person.phone} onChange={(e)=>this.handleChange(e)} />
          </label>
          <label>
           dob:
            <input type="date" name='dob' value={person.dob} onChange={(e)=>this.handleChange(e)} />
          </label>
          <button className="btn btn-primary" onClick={()=>this.handleEdit()}>Update</button>
    </>
    );
  }
}