import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-dom'
import Viewfaculty from './component/faculty/viewfaculty';
export default class App
 extends Component {
  render() {
    return (
    
        <BrowserRouter>

  <Route path='/' component={Viewfaculty}/>
  <Route path='/saransh' component={Viewfaculty}/>
</BrowserRouter>
    
    )
  }
}
