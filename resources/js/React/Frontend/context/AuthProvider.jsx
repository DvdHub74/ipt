import React, { createContext, useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from 'axios'

const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [cargando, setCargando]=useState(true);
    const navigate = useNavigate();


    const authUser = async () => {
          const token = localStorage.getItem('token');

          const config = {
              headers:{
                  "Content-Type": "application/json",
                  Authorization : `Bearer ${token}`
              }
          }

          if(!token){
              setCargando(false);
              return
          }

          try {
              const response = await axios('api/profile',
              config);
              setAuth(response.data);
          } catch (error) {
              console.log(error);
              setAuth({});
          }
          setCargando(false)

    }

    const logout = async () => {

            localStorage.removeItem('token');
            setAuth({});
    }


    return(
        <AuthContext.Provider
            value={{
                auth,
                cargando,
                setAuth,
                logout,
                authUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export{
    AuthProvider
}

export default AuthContext
