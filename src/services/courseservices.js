import axios from 'axios';
const COURSESERVICES_BASE_URL='http://localhost:8000/api/';

class courseservices{
    viewcourse()
    {
        return axios.get(COURSESERVICES_BASE_URL);
    }

    updatecourse(faculty_id)
    {
        return axios.put(COURSESERVICES_BASE_URL+course_id);
    }

    deletecourse(course_id)
    {
        return axios.delete(COURSESERVICES_BASE_URL+course_id);
    }

    addcourse()
    {
        return axios.post(COURSESERVICES_BASE_URL);
    }
}

export default new courseservices();