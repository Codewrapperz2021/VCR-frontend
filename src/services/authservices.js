import axios from 'axios';
const AUTHSERVICES_BASE_URL='http://localhost:8000/api/';

class authservices{
    
    login(data,token)
    {
        return axios.post('http://localhost:8000/api/login',data,token);
    }

    logout(data)
    {
        return axios.post('http://localhost:8000/api/logout',data);
    }

    register(data){
        {
            return axios.post('http://localhost:8000/api/register',data);
        }
    }

    forgotpassword(data){
        return axios.post('http://localhost:8000/api/forgot-password',data);

    }
    resetpassword(data){
        return axios.post('http://localhost:8000/api/reset-password',data);

    }
   
}

export default new authservices();