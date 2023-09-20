import React, {useEffect, useRef, useState} from 'react'
import { Outlet } from 'react-router-dom'
import NavElements from '../Components/NavElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faBars,
faArrowRight,
faPlus
} from '@fortawesome/free-solid-svg-icons';




const AdminLayout = () => {


    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    const sideBarMenu = useRef(null)
    const contentMain = useRef(null)

    const hanndleClick = () => {
        if(sideBarMenu.current.classList.contains("hidden")){
            sideBarMenu.current.classList.remove("hidden")
            sideBarMenu.current.classList.add("w-screen")
            sideBarMenu.current.classList.add("block")
            contentMain.current.classList.add('opacity-10')
        }
        else{
            sideBarMenu.current.classList.add("hidden")
            sideBarMenu.current.classList.remove("w-screen")
            contentMain.current.classList.remove('opacity-10')
        }
    }

  const actualizarAnchoDePantalla = () => {
    if (window.innerWidth > 1023) {

        sideBarMenu.current.classList.add('hidden');
        sideBarMenu.current.classList.remove('w-screen', 'block');
        contentMain.current.classList.remove('opacity-10');

    }
  };

  useEffect(() => {
    // Agregar un event listener para el evento de redimensionamiento de la ventana
    window.addEventListener('resize', actualizarAnchoDePantalla);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', actualizarAnchoDePantalla);
    };
  }, []);



  return (
    <>





        <div className="flex p-0 m-0">
            <aside className=" bg-white lg:w-64 md:w-64 sm:w-72 w-56 min-h-screen fixed md:static  lg:static text-indigo-950 uppercase shadow-2xl lg:block md:block hidden " ref={sideBarMenu}
                style={{ zIndex: 300 }}
            >
                <nav className="mt-10">
                    <NavElements/>
                </nav>
            </aside>
            <button className='m-5 p-5 lg:hidden md:hidden fixed top-0'
                onClick={hanndleClick}
                style={{ zIndex: 350 }}
            >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
            <main className="flex-1 min-h-screen static p-5 pt-20 bg-slate-100" ref={contentMain}>
                    <Outlet />
            </main>
        </div>
    </>
  )
}

export default AdminLayout




