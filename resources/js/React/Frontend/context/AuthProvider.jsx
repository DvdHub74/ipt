import React, { createContext, useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from 'axios'

const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [cargando, setCargando]=useState(true);
    const navigate = useNavigate();




    useEffect(() => {
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
                const {data} = await axios('api/profile',
                config);

                setAuth(data);

            } catch (error) {
                console.log(error);
                setAuth({});
            }
            setCargando(false)

      }
      authUser();
    }, [])

    const logout = async () => {

            localStorage.removeItem('token');
            setAuth({});
    }


    return(
        <AuthContext.Provider
            value={{
                auth,
                cargando,
                logout
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
