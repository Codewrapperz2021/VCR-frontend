import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import AdminDashboard from './component/dashboard/admindashboard';
import StudentDashboard from './component/dashboard/studentdashboard';
import TeacherDashboard from './component/dashboard/teacherdashboard';


import Forget from './component/auth/forgetpassword';
import Resetpassword from './component/auth/resetpassword';
import Login from './component/auth/login';
import Logout from './component/auth/logout';
import Register from './component/auth/register';


import Addtimetable from './component/timetablemanagement/addtimetable';
import Viewtimetable from './component/timetablemanagement/viewtimetable';

import Addlecture from './component/lecture/addlecture';
import Viewlecture from './component/lecture/viewlecture';
import Updatelecture from './component/lecture/updatelecture';


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

import Addquestion from './component/question/addquestion';
import Viewquestion from './component/question/viewquestion';
import Updatequestion from './component/question/updatequestion';

import Assessment from './component/student/Assessment';
import Assessment_1 from './component/assessment/assessment_1/assessment_1';



export default function Path() {
    return (
        <div>
            <Router>

                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="/admindashboard" element={<AdminDashboard />} />
                    <Route path="/studentdashboard" element={<StudentDashboard />} />
                    <Route path="/teacherdashboard" element={<TeacherDashboard />} />

                    <Route path="/forget-password" element={<Forget />} />
                    <Route path="/reset-password" element={<Resetpassword />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/addtimetable" element={<Addtimetable />} />
                    <Route path="/viewtimetable" element={<Viewtimetable />} />

                    <Route path="/addlecture" element={<Addlecture />} />
                    <Route path="/viewlecture" element={<Viewlecture />} />
                    <Route exact path={"updatelecture/:id"} element={<Updatelecture />} />

                    <Route path="/viewfaculty" element={<Viewfaculty />} />
                    <Route path="/addfaculty" element={<Addfaculty />} />
                    <Route exact path={"updatefaculty/:id"} element={<Updatefaculty />} />

                    <Route path="/viewstudent" element={<Viewstudent />} />
                    <Route path="/addstudent" element={<Addstudent />} />
                    <Route exact path={"updatestudent/:id"} element={<Updatestudent />} />

                    <Route path="/viewsubject" element={<Viewsubject />} />
                    <Route path="/addsubject" element={<Addsubject />} />
                    <Route exact path={"updatesubject/:id"} element={<Updatesubject />} />

                    <Route path="/viewcourse" element={<Viewcourse />} />
                    <Route path="/addcourse" element={<Addcourse />} />
                    <Route exact path={"updatecourse/:id"} element={<Updatecourse />} />

                    <Route path="/addquestion" element={<Addquestion />} />
                    <Route path="/viewquestion" element={<Viewquestion />} />
                    <Route exact path={"updatequestion/:id"} element={<Updatequestion />} />

                    <Route path="/assessment" element={<Assessment />} />
                    <Route path="/assessment-1" element={<Assessment_1 />} />
                </Routes>

            </Router>
        </div>
    )
}
