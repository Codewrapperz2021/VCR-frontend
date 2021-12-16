import axios from 'axios';
const STUDENTASSESSMENTSERVICES_BASE_URL='http://localhost:8000/api/student-assessment/';

class studentassessmentservices{
    viewstudentassesment()
    {
        return axios.get(STUDENTASSESSMENTSERVICES_BASE_URL);
    }
    studentassesmentById(id){
        {
            return axios.get(STUDENTASSESSMENTSERVICES_BASE_URL+id);
        }
    }

    updatestudentassesment(id,studentassesment)
    {
        return axios.put(STUDENTASSESSMENTSERVICES_BASE_URL+id,studentassesment);
    }

    deletestudentassesment(studentassesment_id)
    {
        return axios.delete(STUDENTASSESSMENTSERVICES_BASE_URL+studentassesment_id);
    }   

    addstudentassesment(studentassesment)
    {
        return axios.post(STUDENTASSESSMENTSERVICES_BASE_URL,studentassesment);
    }
}

export default new studentassessmentservices();