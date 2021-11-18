import axios from 'axios';
const STUDENTSERVICES_BASE_URL='http://localhost:8000/api/student/';

class studentservices{
    viewstudent()
    {
        return axios.get(STUDENTSERVICES_BASE_URL);
    }
    studentById(id){
        {
            return axios.get(STUDENTSERVICES_BASE_URL+id);
        }
    }

    updatestudent(id,student)
    {
        return axios.put(STUDENTSERVICES_BASE_URL+id,student);
    }

    deletestudent(student_id)
    {
        return axios.delete(STUDENTSERVICES_BASE_URL+student_id);
    }

    addstudent(student)
    {
        return axios.post(STUDENTSERVICES_BASE_URL,student);
    }
}

export default new studentservices();