import axios from 'axios';
const SUBJECTSERVICES_BASE_URL='http://localhost:8000/api/';

class subjectservices{
    viewsubject()
    {
        return axios.get(SUBJECTSERVICES_BASE_URL);
    }

    updatesubject(subject_id)
    {
        return axios.put(SUBJECTSERVICES_BASE_URL+subject_id);
    }

    deletesubject(subject_id)
    {
        return axios.delete(SUBJECTSERVICES_BASE_URL+subject_id);
    }

    addsubject()
    {
        return axios.post(SUBJECTSERVICES_BASE_URL);
    }
}

export default new subjectservices();