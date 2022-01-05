import axios from 'axios';
const MATERIALSERVICES_BASE_URL='http://localhost:8000/api/material/';

class materialservices{
    viewmaterial()
    {
        return axios.get(MATERIALSERVICES_BASE_URL);
    }

    materialById(id){
        {
            return axios.get(MATERIALSERVICES_BASE_URL+id);
        }
    }
    
    deletematerial(material_id)
    {
        return axios.delete(MATERIALSERVICES_BASE_URL+material_id);
    }

    addmaterial(material)
    {
        return axios.post(MATERIALSERVICES_BASE_URL,material);
    }
}

export default new materialservices();