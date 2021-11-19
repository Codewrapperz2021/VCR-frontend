import React, { Component } from 'react';
import { render } from "react-dom";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Addfaculty from './component/faculty/addfaculty';
import Viewfaculty from './component/faculty/viewfaculty';
import Updatefaculty from './component/faculty/updatefaculty';

import Addstudent from './component/student/addstudent';
import Viewstudent from './component/student/viewstudent';
import Updatestudent from './component/student/updatestudent';

import Addsubject from './component/subject/addsubject';
import Viewsubject from './component/subject/viewsubject';
import Updatesubject from './component/subject/updatesubject';

import Addcourse from './component/course/addcourse';
import Viewcourse from './component/course/viewcourse';
import Updatecourse from './component/course/updatecourse';


export default class App extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div>
                <Router>
                     <Routes>
                        <Route path="/viewfaculty" element={<Viewfaculty/>}/>
                        <Route path="/addfaculty" element={<Addfaculty/>}/>
                        <Route exact path={"updatefaculty/:id"} element={ <Updatefaculty />} />
                          
                        <Route path="/viewstudent" element={<Viewstudent/>}/>
                        <Route path="/addstudent" element={<Addstudent/>}/>
                        <Route exact path={"updatestudent/:id"} element={ <Updatestudent />} />
                          
                        <Route path="/viewsubject" element={<Viewsubject/>}/>
                        <Route path="/addsubject" element={<Addsubject/>}/>
                        <Route exact path={"updatesubject/:id"} element={ <Updatesubject />} />
                          
                        <Route path="/viewcourse" element={<Viewcourse/>}/>
                        <Route path="/addcourse" element={<Addcourse/>}/>
                        <Route exact path={"updatecourse/:id"} element={ <Updatecourse />} />  
 
                          
                     </Routes>

                </Router>
                 {/* <BrowserRouter> */}
{/* 
<Route path='/' component={Viewfaculty}/>
<Route path='/saransh' component={Viewfaculty}/> */}
{/* </BrowserRouter> */}
            </div>
        )
    }
}