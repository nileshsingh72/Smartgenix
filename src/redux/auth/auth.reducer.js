import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SIGNIN_SUCCESS } from "./auth.types";
import jwt from 'jwt-decode';
let SG =JSON.parse(localStorage.getItem('smartgenix'))||''

    if(SG!==''){
        let decode = jwt(SG.token)
        if(!decode.userId){
            SG = ''
        }
      }

let initState = {
    loading: false,
    error: false,
    isAuth: SG === ''?false:true,
    token: SG!==''?SG.token:'' ,
    user: SG!=='' ?SG.user:{}
}




export const authReducer = (state = initState, {type , payload}) => {
    switch (type) {
        case AUTH_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case AUTH_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case AUTH_SIGNIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                token: payload.token,
                isAuth: true,
                user: payload.user,
            }
        }
        case AUTH_LOGOUT: {
            return {
                ...state,
                loading: false,
                error: false,
                isAuth: false,
                token: "",
                user : {}
            }
        }
        default: {
            return state;
        }
    }
}