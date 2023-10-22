import React,{createContext, useContext, useEffect,useReducer, useState}from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from '../config/FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const authContext = createContext()

export default function AuthContextProvider(props) {
const [isAppLoading, setIsAppLoading] = useState(true)
    const initailState = {
        auth:false,
        user:{}
    }
    
    const reducer = (state,action) => {
         switch (action.type) {
            case "SET_LOGGED_IN":
                return {authenticated:true,user:action.payload.user}
            case "SET_LOGGED_OUT":
                return initailState
              
         
            default:
                state;
         }
    }

    const [state, dispatch] = useReducer(reducer,initailState)

    const readUserProfile = async(user) =>{
         try {
            const docRef = doc(firestore, "users", user.uid);
            const docSnap = await getDoc(docRef);

             if (docSnap.exists()) {
                let user = docSnap.data()
                dispatch({type:"SET_LOGGED_IN",payload:{user}})
             } else {
             console.log("No such document!");
}
setIsAppLoading(false)
         } catch (error) {
            
         }
    }

       useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                readUserProfile(user)
            
            } else {
              setIsAppLoading(false)
            }
          });
       }, [])
       
  return (
    <>
       <authContext.Provider value={{...state,dispatch,readUserProfile,setIsAppLoading,isAppLoading}}>
         {props.children}
       </authContext.Provider>
    </>
  )
}

export const  useAuthContext = ()=> useContext(authContext)