import axios from 'axios';
const FACULTYSERVICES_BASE_URL='http://localhost:8000/api/faculty/';

class facultyservices{
    viewfaculty()
    {
        return axios.get(FACULTYSERVICES_BASE_URL);
    }
    facultyById(id){
        {
            return axios.get(FACULTYSERVICES_BASE_URL+id);
        }
    }

    updatefaculty(id,faculty)
    {
        return axios.put(FACULTYSERVICES_BASE_URL+id,faculty);
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