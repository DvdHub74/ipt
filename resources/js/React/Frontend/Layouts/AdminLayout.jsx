import React from 'react'
import { Outlet } from 'react-router-dom'
import NavElements from '../Components/NavElements'

const AdminLayout = () => {





  return (
    <>
        <div className="flex">
            <aside class="bg-white w-64 min-h-screen text-indigo-950 uppercase shadow-2xl">
                <nav className="mt-10">
                    <NavElements/>
                </nav>
            </aside>
            <main class="flex-1 p-5 ">
                    <Outlet />
            </main>
        </div>
    </>
  )
}

export default AdminLayout




