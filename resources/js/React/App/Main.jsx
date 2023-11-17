import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "../Frontend/pages/home"
import AuthLayout from "../Frontend/Layouts/AuthLayout"
import AdminLayout from "../Frontend/Layouts/AdminLayout"
import Index from "../Frontend/pages/Admin/Index"
import ListFinanzas from "../Frontend/pages/Admin/Finanzas/ListFinanzas"
import ListCampos from "../Frontend/pages/Admin/Campos/ListCampos"
import ListRegistros from "../Frontend/pages/Admin/Registros/ListRegistros"
import Reportes from "../Frontend/pages/Admin/Reports/Reportes"
import Perfil from "../Frontend/pages/Admin/Usuario/Perfil"

import { AuthProvider } from "../Frontend/context/AuthProvider"

function Main(){
    return (
         <HashRouter>

                <Routes>
                    <Route path="/" element={<AuthLayout/>}>
                        <Route index element={<Home/>}/>
                    </Route>
                    <Route path="/home" element={<AdminLayout/>}>
                        <Route index element={<Index/>}/>
                        <Route path="list-finanzas" element={<ListFinanzas/>}/>
                        <Route path="list-registros" element={<ListRegistros/>}/>
                        <Route path="list-campos" element={<ListCampos/>}/>
                        <Route path="reportes" element={<Reportes/>}/>
                        <Route path="perfil" element={<Perfil/>}/>
                    </Route>
                </Routes>

         </HashRouter>
    )
  }

export {
    Main
}
