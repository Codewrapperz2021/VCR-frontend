import React from 'react'
import axios from 'axios';
import Deletefaculty from './deletefaculty';
import Updatefaculty from './updatefaculty';
import {withRouter} from 'react-router'
import facultyservices from '../../services/facultyservices';
export default class Viewfaculty extends React.Component
{
    state = {
        persons: [],
        person:"",

      }
    constructor(){
        
        super();
       
        }
  

    componentDidMount() {
        facultyservices.viewfaculty()
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
     
   
    render()
    {
      
        return(
        
           
             <table class="table table-bordered">
             <thead>
               <tr class="table-info">
               <th scope="col-2">S.no.</th>

               <th scope="col-2">First Name</th>
               <th scope="col-2">Last Name</th>
               <th scope="col-3">Email</th>
               <th scope="col-3">Contact</th>
               <th scope="col-3">dob</th>
               <th scope="col-2">Action</th>
               
               </tr>
             </thead>
             <tbody>
               {this.state.persons.map(person=> <tr>
                <td>{person.id}</td>

                <td>{person.first_name}</td>
                 <td>{person.last_name}</td>
                <td> {person.email}</td>
                <td>{person.phone}</td>
                <td>{person.dob}</td>
                <div><td><Deletefaculty id={person.id}/> &nbsp;
                <input className="btn btn-primary"type="button" id={person} value="Edit"onClick={(e)=>window.location.replace('/updateFaculty/'+person.id)} /></td></div>
              </tr>)
               }
             </tbody>
        </table>
        
     
            
        
        
        

        )
    }
    
}
//export default withRouter(Viewfaculty);