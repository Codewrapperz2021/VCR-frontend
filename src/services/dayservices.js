import axios from 'axios';
const DAYSERVICES_BASE_URL='http://localhost:8000/api/day/';

class dayservices{
    viewday()
    {
        return axios.get(DAYSERVICES_BASE_URL);
    }

    dayById(id){
        {
            return axios.get(DAYSERVICES_BASE_URL+id);
        }
    }
    updateday(id,day)
    {
        return axios.put(DAYSERVICES_BASE_URL+id,day);
    }

    deleteday(day_id)
    {
        return axios.delete(DAYSERVICES_BASE_URL+day_id);
    }

    addday(day)
    {
        return axios.post(DAYSERVICES_BASE_URL,day);
    }
}

export default new dayservices();