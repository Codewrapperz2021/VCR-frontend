import React from 'react';
import axios from 'axios';
import facultyservices from '../../services/facultyservices';


export default class Deletefaculty extends React.Component {
  state = {
    id: '',
  }

  handleDelete =() => {
      var id=this.props.id
        facultyservices.deletefaculty(id)
        .then(res => {
      })
      console.log(this.props.id)
  }

  render() {
    return (
    <>
          <button className="btn btn-danger" onClick={()=>this.handleDelete()}>Delete</button>
    </>
    );
  }
}
