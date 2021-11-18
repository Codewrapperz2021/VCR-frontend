import React from 'react';
import axios from 'axios';
import studentservices from '../../services/studentservices';


export default class Deletestudent extends React.Component {
  state = {
    id: '',
  }

  handleDelete =() => {
      var id=this.props.id
        studentservices.deletestudent(id)
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
