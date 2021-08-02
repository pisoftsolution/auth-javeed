import axios from "axios";

// export const url = "http://localhost:8096/api";
export const url = "";

export const getBlogs = () =>{
    return axios.get(`${url}/Blogs/blog`)
};
export const addBlog = (formData) =>{
    return axios.post(`${url}/Blogs/add`, formData)
};

export const editBlog = (data) =>{
    return axios.put(`${url}/Blogs/blog`, data)
};


export const deleteBlog = (data) =>{
    // alert("Hello")
    return axios.delete(`${url}/Blogs/blog`, data)
};