import React from 'react';
import axios from 'axios';
import courseservices from '../../services/courseservices';


export default class Deletecourse extends React.Component {
  state = {
    id: '',
  }

  handleDelete =() => {
      var id=this.props.id
        courseservices.deletecourse(id)
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
