import axios from 'axios';
const AUTHSERVICES_BASE_URL='http://localhost:8000/api/';

class authservices{
    
    login(data,token)
    {
        return axios.post('http://localhost:8000/api/login',data,token);
    }

    logout(token)
    {
        return axios.post('http://localhost:8000/api/logout',token);
    }

    register(data){
        {
            return axios.post('http://localhost:8000/api/register',data);
        }
    }
   
}

export default new authservices();