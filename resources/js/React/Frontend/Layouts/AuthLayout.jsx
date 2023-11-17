import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../../../css/bg.css'


const AuthLayout = () => {
  return (
    <>

        <main className='p-0 m-0  vw-100 mainContain'>
            <Outlet/>
        </main>

    </>
  )
}

export default AuthLayout
