import React, { Component } from 'react';
import { render } from "react-dom";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Addfaculty from './component/faculty/addfaculty';
import Viewfaculty from './component/faculty/viewfaculty';
import Updatefaculty from './component/faculty/updatefaculty';
import Updatesubject from './component/subject/updatesubject';
import Addsubject from './component/subject/addsubject';
import Viewsubject from './component/subject/viewsubject';

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
                        <Route path="/viewsubject" element={<Viewsubject/>}/>
                        <Route path="/addsubject" element={<Addsubject/>}/>
                        <Route exact path={"updatesubject/:id"} element={ <Updatesubject />} />
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
// export default withRouter(App);