import axios from 'axios';
const SUBJECTSERVICES_BASE_URL='http://localhost:8000/api/subject/';

class subjectservices{
    viewsubject()
    {
        return axios.get(SUBJECTSERVICES_BASE_URL);
    }
    subjectById(id){
        {
            return axios.get(SUBJECTSERVICES_BASE_URL+id);
        }
    }


    updatesubject(id,subject) 
    {
        return axios.put(SUBJECTSERVICES_BASE_URL+id,subject);
    }

    deletesubject(subject_id)
    {
        return axios.delete(SUBJECTSERVICES_BASE_URL+subject_id);
    }

    addsubject(subject)
    {
        return axios.post(SUBJECTSERVICES_BASE_URL,subject);
    }
}

export default new subjectservices();