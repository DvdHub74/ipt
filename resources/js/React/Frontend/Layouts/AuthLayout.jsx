import React from 'react'
import { Outlet } from 'react-router-dom'


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
