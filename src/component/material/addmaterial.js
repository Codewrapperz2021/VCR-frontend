import materialservices from '../../services/materialservices';
import courseservices from '../../services/courseservices';
import React, { useState, useEffect } from 'react';
import '../../form.css';
export default function Addmaterial() {
    const [material, setMaterial] = useState(null);
    const [course, setCourse] = useState('');
    const [comment, setComment] = useState('');
    const [coursenames, setCoursename] = useState([]);
    

    const submitHandler = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("course",course)
        formdata.append("comment",comment)
        formdata.append('file',document.getElementById('file').files[0])
        materialservices.addmaterial(formdata)
    }

    useEffect(() => {
        courseservices.viewcourse()
            .then(res => {
                setCoursename(res.data);
            })
    }, [])


    return (
        <div>
            <form onSubmit={(e) => { submitHandler(e) }}>
                <div className="container pt-5 d-flex justify-content-center" >
                    <div className="col-md-6 shadow p-4">
                        <h3 className="text-center">Add material</h3>
                        <hr />
                        <label for=""><b>Select course</b></label>
                        <div>
                            <select className='select_drop' name="course" onChange={(e) => setCourse(e.target.value)}>
                            {coursenames.map(course =>
                                    <option value={course.cname} >{course.cname}</option>
                                )}
                            </select>
                        </div>

                        <label for=""><b>material</b></label><br></br>
                        <input id="file" name="file" type="file" placeholder="Enter the material" onChange={(e) => setMaterial(e.target.material[0])} />

                        <label for=""><b>comment</b></label>
                        <input id="comment" type="text" placeholder="comment" onChange={(e) => setComment(e.target.value)} />

                        <button id="button" class="addbtn">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
