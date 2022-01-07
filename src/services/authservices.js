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

    googlelogin(data){
        {
            return axios.post('http://localhost:8000/api/googlelogin',data);
        }
    }

    forgotpassword(data){
        return axios.post('http://localhost:8000/api/forgot-password',data);

    }
    resetpassword(data){
        return axios.post('http://localhost:8000/api/reset-password',data);

    }
    changepassword(data){
        return axios.post('http://localhost:8000/api/profile/change-password',data);

    }
    changeprofile(data){
        return axios.post('http://localhost:8000/api/profile/profileimage-update',data);
    }
    profileById(id){
        {
            return axios.get('http://localhost:8000/api/user/'+id);
        }
    }
   
}

export default new authservices();