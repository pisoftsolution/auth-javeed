import axios from "axios";

export const url = "http://localhost:8096/api";

export const getBlogs = () =>{
    return axios.get(`${url}/blogs/blogs`)
};
export const addBlog = (formData) =>{
    return axios.post(`${url}/blogs/add`,formData)
};
export const signup = (formData) =>{
return axios.post(`${url}/auth/signup`, formData)
}; 
export const login = (formData) =>{
    return axios.post(`${url}/auth/login`, formData)
    };