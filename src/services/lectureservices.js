import axios from 'axios';
const LECTURESERVICES_BASE_URL='http://localhost:8000/api/lecture/';

class lectureservices{
    viewlecture()
    {
        return axios.get(LECTURESERVICES_BASE_URL);
    }
    lectureById(id){
        {
            return axios.get(LECTURESERVICES_BASE_URL+id);
        }
    }

    updatelecture(id,lecture)
    {
        return axios.put(LECTURESERVICES_BASE_URL+id,lecture);
    }

    deletelecture(lecture_id)
    {
        return axios.delete(LECTURESERVICES_BASE_URL+lecture_id);
    }

    addlecture(lecture)
    {
        return axios.post(LECTURESERVICES_BASE_URL,lecture);
    }
}

export default new lectureservices();