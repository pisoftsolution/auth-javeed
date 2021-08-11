import * as api from '../api';
import { SIGNUP, LOGIN, LOGOUT } from '../constants';



export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);
        dispatch({ type: SIGNUP, data });
        alert("Signup successful");
        history.push('/verify/email');
        return data;
    } catch (e) {
      alert(e?.response?.data?.msg);
    }
};


export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        dispatch({ type: LOGIN, data });
        alert("Login successful");
        localStorage.setItem("token", data.token);
        history.push('/');
        return data;
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
};
export const logout = (history) => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT });
        alert("Logout successful");
        history.push('/');
    } catch (e) {
        console.log(e);
        alert(e?.response?.data?.msg);
    }
};