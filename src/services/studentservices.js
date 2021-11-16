import axios from 'axios';
const STUDENTSERVICES_BASE_URL='http://localhost:8000/api/';

class studentservices{
    viewfaculty()
    {
        return axios.get(STUDENTSERVICES_BASE_URL);
    }

    updatestudent(student_id)
    {
        return axios.put(STUDENTSERVICES_BASE_URL+student_id);
    }

    deletestudent(student_id)
    {
        return axios.delete(STUDENTSERVICES_BASE_URL+student_id);
    }

    addstudent()
    {
        return axios.post(STUDENTSERVICES_BASE_URL);
    }
}

export default new studentservices();