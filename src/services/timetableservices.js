import axios from 'axios';
const TIMETABLESERVICES_BASE_URL='http://localhost:8000/api/timetable/';

class timetableservices{
    viewtimetable()
    {
        return axios.get(TIMETABLESERVICES_BASE_URL);
    }
    timetableById(id){
        {
            return axios.get(TIMETABLESERVICES_BASE_URL+id);
        }
    }

    updatetimetable(id,timetable)
    {
        return axios.put(TIMETABLESERVICES_BASE_URL+id,timetable);
    }

    deletetimetable(lecture_id)
    {
        return axios.delete(TIMETABLESERVICES_BASE_URL+lecture_id);
    }

    addtimetable(timetable)
    {
        return axios.post(TIMETABLESERVICES_BASE_URL,timetable);
    }
}

export default new timetableservices();