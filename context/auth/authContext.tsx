import * as SecureStore from 'expo-secure-store';
import { memo } from 'react';
import { createContext, useEffect, useMemo, useReducer } from "react";

export const AuthContext = createContext();

let initialState = {
    isLoading:true,
    isSignout:false,
    uid:null
};
const reducerDispatch = (prevState, action) => {
    switch (action.type) {
        case "RESTORE_TOKEN":
            return {
                ...prevState,
                isLoading:false,
                uid:action.uid
            }
        case "SIGN_IN":
            return {
                ...prevState,
                isSignout:false,
                uid:action.uid
            }
        case "SIGN_OUT":
            return {
                ...prevState,
                isSignout:true,
                uid:null
            }
        default:
            break;
    }
}
const Auth = ({children})=> {
    const [state, dispatch] = useReducer(reducerDispatch, initialState);
    // console.info(state)
    useEffect(()=> {
        const initialRetoreToken = async ()=> {
            let uid;
            try {
                uid = await SecureStore.getItemAsync("uid");
            
            } catch (error) {
                console.log(error)
                throw error
            }
            dispatch({type:"RESTORE_TOKEN", uid:uid});
        };
        initialRetoreToken()
    },[]);
        const authContext = useMemo(()=>({
            signIn: async(uid:any)=>{
                await SecureStore.setItemAsync("uid", uid); 
                dispatch({type:"SIGN_IN",uid:uid});
            },
            signOut:async()=>{
            
                await SecureStore.deleteItemAsync("uid")
                dispatch({type:"SIGN_OUT"})
            },
            uid:state?.uid,
            isLoading:state.isLoading,
        }),[state.uid,state.isLoading]);
    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
};
export default Auth;