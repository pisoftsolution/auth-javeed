import * as api from "../api";
import { SIGNUP , LOGIN } from "../constants";



export const signup = (formData , history) => async (dispatch) =>{
    try {
        const { data } = await api.signup(formData);
        dispatch({type: SIGNUP, data});
        alert("signup sucessful");
        history.push('/login');
        return data;
    } catch (e) {
        console.log(e);
        alert(e?.response?.data?.msg);
    }
};


export const login = (formData , history) => async (dispatch) =>{
    try {
        const { data } = await api.login(formData);
        dispatch({type: LOGIN, data});
        alert("Login sucessful");
        history.push('/');
        return data;
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
};