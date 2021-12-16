import axios from 'axios';
const QUESTIONSERVICES_BASE_URL='http://localhost:8000/api/question/';

class questionservices{
    viewquestion()
    {
        return axios.get(QUESTIONSERVICES_BASE_URL);
    }
    questionById(id){
        {
            return axios.get(QUESTIONSERVICES_BASE_URL+id);
        }
    }

    updatequestion(id,question)
    {
        return axios.put(QUESTIONSERVICES_BASE_URL+id,question);
    }

    deletequestion(question_id)
    {
        return axios.delete(QUESTIONSERVICES_BASE_URL+question_id);
    }

    addquestion(question)
    {
        return axios.post(QUESTIONSERVICES_BASE_URL,question);
    }

    
}

export default new questionservices();