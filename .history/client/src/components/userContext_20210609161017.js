import {createContext} from 'react';
const initialState = [{name:null, isAuth:false, role:null}]
export const UserContext = createContext(localStorage.getItem('null') || initialState);