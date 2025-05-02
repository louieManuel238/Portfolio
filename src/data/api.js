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
            const { first_name, last_name, tagline, title, about } = JSONdata;
            return { first_name, last_name, tagline, title, about };
        }   
    }

    async getWorkExperience(){
        try{
            const response = await axios.get(`${this.BASE_URL}/works/1`);
            return response.data;
        }catch(error){
            console.error("Error fetching user data:", error);
            const { work } = JSONdata;
            return work;
        }
    }

    async getWorkExperienceByID(id){
        try{
            const response = await axios.get(`${this.BASE_URL}/works/1/${id}`);
            return response.data;
        }catch(error){
            console.error("Error fetching user data:", error);
            const { work } = JSONdata;
            work.filter((jsonWorkID)=> id==jsonWorkID);
            return work[0];
        }
    }

    async getProjects(){
        try{
            const response = await axios.get(`${this.BASE_URL}/projects/1`);
            return response.data;
        }catch(error){
            console.error("Error fetching user data:", error);
            const { projects } = JSONdata;
            return projects;
        }
    }
}

export default apiCaller;