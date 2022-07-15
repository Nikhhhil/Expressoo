import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatchEvent) => {   console.log("bc");
  try {  console.log("bc1");
    const { data } = await api.signIn(formData);
    
    dispatchEvent({ type: AUTH, data });
    
    console.log("action_auth_signin_done")
    router('/');
  } catch (error) { 
    console.log("action_auth_signinerror");
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatchEvent) => {      
  try {   
    const { data } = await api.signUp(formData);
   
    dispatchEvent({ type: AUTH, data });
 
    router('/');
  } catch (error) {  
    console.log(error);
  }
};