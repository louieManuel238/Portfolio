import axios from "axios";
import JSONdata from './data.json';
class apiCaller{

    constructor(){
        this.BASE_URL = `${import.meta.env.VITE_SERVER_BASE_URL}:${import.meta.env.VITE_SERVER_PORT}`
    }

    async getUser(){
        try {
            const response = await axios.get(`${this.BASE_URL}/user/1`);
            return response.data;
        }catch(error){
            console.error("Error fetching user data:", error);
            const { first_name, last_name, tagline, title } = JSONdata;
            return { first_name, last_name, tagline, title, about };
        }   
    }
}

export default apiCaller;