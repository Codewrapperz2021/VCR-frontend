import React from 'react';
import axios from 'axios';
import subjectservices from '../../services/subjectservices';


export default class Deletesubject extends React.Component {
  state = {
    id: '',
  }

  handleDelete =() => {
      var id=this.props.id
        subjectservices.deletesubject(id)
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
