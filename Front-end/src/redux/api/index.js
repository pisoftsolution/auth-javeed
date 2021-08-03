import axios from "axios";

export const url = "http://localhost:8096/api";

//blogs
export const getBlogs = () => {
    return axios.get(`${url}/blogs/blogs`)
};

export const addBlog = (formData) => {
    return axios.post(`${url}/blogs/add`, formData)
};

//auth
export const signup = (formData) => {
    return axios.post(`${url}/auth/signup`, formData)
};

export const login = (formData) => {
    return axios.post(`${url}/auth/login`, formData)
};

//verify
export const emailOtp = (email) => {
    return axios.get(`${url}/verify/email-otp?email=${email}`)

};

export const emailOtpVerify = (email, otp) => {
    return axios.get(`${url}/verify/email-otp-verify?email=${email}&&otp=${otp}`)

};

export const phoneOtp = (phone) => {
    return axios.get(`${url}/verify/phone-otp?phone=${phone}`)
};

export const phoneOtpVerify = (formData, email, phone) => {
    return axios.post(`${url}/verify/phone-otp-verify?phone=${phone}&&email=${email}`, formData)
};