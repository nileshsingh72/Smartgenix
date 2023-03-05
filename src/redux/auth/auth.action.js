import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SIGNIN_SUCCESS} from "./auth.types";
import axios from 'axios';
const host = 'https://cloudy-cyan-dragonfly.cyclic.app';
export const loginAPI = (data) => async (dispatch) => {   
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${host}/user/login`, data);
        dispatch({ type: AUTH_SIGNIN_SUCCESS, payload: res.data});
        localStorage.setItem('smartgenix',JSON.stringify(res.data));
        return res.data;
    }
    catch (e) {
        dispatch({ type: AUTH_ERROR })
        return e;
    }
}
export const signupAPI = async(data) =>{
    try {
        let res = await axios.post(`${host}/user/register`, data);
        console.log(res)
        return res.data;
    }
    catch (e) {
        console.log(e)
        return e;
    }
}
export const logoutAPI = () => {
    localStorage.removeItem('smartgenix');
    return {type:AUTH_LOGOUT}
}







