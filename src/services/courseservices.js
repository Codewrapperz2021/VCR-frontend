import axios from 'axios';
const COURSESERVICES_BASE_URL='http://localhost:8000/api/course/';

class courseservices{
    viewcourse()
    {
        return axios.get(COURSESERVICES_BASE_URL);
    }

    courseById(id){
        {
            return axios.get(COURSESERVICES_BASE_URL+id);
        }
    }
    updatecourse(id,course)
    {
        return axios.put(COURSESERVICES_BASE_URL+id,course);
    }

    deletecourse(course_id)
    {
        return axios.delete(COURSESERVICES_BASE_URL+course_id);
    }

    addcourse(course)
    {
        return axios.post(COURSESERVICES_BASE_URL,course);
    }
}

export default new courseservices();