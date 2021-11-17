import axios from 'axios';
const FACULTYSERVICES_BASE_URL='http://localhost:8000/api/faculty/';

class facultyservices{
    viewfaculty()
    {
        return axios.get(FACULTYSERVICES_BASE_URL);
    }

    updatefaculty(faculty_id)
    {
        return axios.put(FACULTYSERVICES_BASE_URL+faculty_id);
    }

    deletefaculty(faculty_id)
    {
        return axios.delete(FACULTYSERVICES_BASE_URL+faculty_id);
    }

    addfaculty(faculty)
    {
        return axios.post(FACULTYSERVICES_BASE_URL,faculty);
    }
}

export default new facultyservices();