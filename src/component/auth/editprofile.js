import React, { useState, useEffect } from 'react'
import authservices from '../../services/authservices'
import '../../form.css';
import swal from 'sweetalert';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import axios from 'axios'
export default function Editprofile() {
    const navigate = useNavigate();
    const { id } = useParams();
    const data = useSelector(state => state.UserData)
    const [name, setName] = useState('');
    const [uname, setUName] = useState('');
    const [image, setImage] = useState('');
    const [file, setProfile] = useState(null);
    const token = (token) => {
        axios.interceptors.request.use(function (config) {
            const token = data.data.token
            console.log(token)
            config.headers.Authorization = token ? `Bearer ${token}` : '';
            return config;
        })
    }
    console.log(image)
    useEffect(() => {
        authservices.profileById(id)
            .then(res => {
                const persons = res.data;
                setUName(persons.name);
                setImage(persons.profileimage)
            })

    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        token();
        const formdata = new FormData();
        formdata.append("name", name)
        formdata.append('profileimage', document.getElementById('file').files[0])

        authservices.changeprofile( formdata).then((res) => {
            navigate('/')
            swal("Profile Updated!", "Successfully!", "success", {
                buttons: false,
                timer: 2000,

            });
        })
    }
    return (
        <div>
            <form enctype="multipart/form-data" onSubmit={(e) => { submitHandler(e) }}>
                <div className="container pt-5 d-flex justify-content-center" >
                    <div className="col-md-6 shadow p-4">
                        <h3 className="text-center">Edit Profile</h3>
                        <hr />

                        <div>
                            <label for=""><b>Name</b></label>
                            <input id="name" name="name" type="text" placeholder="Enter the Name" defaultValue={uname} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div>
                            <label for=""><b>Profile Image</b></label>
                            <input type="file" name="file" id="file" defaultValue={image} onChange={(e) => setProfile(e.target.files[0])} />
                        </div>
                        <button id="button" class="addbtn" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}