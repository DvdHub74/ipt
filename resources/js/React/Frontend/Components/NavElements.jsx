import React,  { useState, useRef } from 'react'
import { Outlet,Link } from 'react-router-dom'
import logo from '../../../../../public/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faHome,
faPenToSquare,
faSquarePlus,
faCaretDown,
faUser,
faCoins,
faHouseUser,
faNewspaper,
faGears,
faTable} from '@fortawesome/free-solid-svg-icons';


const NavElements = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropDownMenu1 = useRef(null);
    const dropDownMenu2 = useRef(null);
    const dropDownMenu3 = useRef(null);
    const margen= 'my-5';

    const handleDropdownClick = (dropdownName) => {
        if (activeDropdown === dropdownName) {

          setActiveDropdown(null);
        } else {

          if (activeDropdown) {
            const previouslyOpenDropdown = `dropDownMenu${activeDropdown}`;
            const previouslyOpenDropdownRef = eval(previouslyOpenDropdown);
            if (previouslyOpenDropdownRef.current) {
              previouslyOpenDropdownRef.current.classList.add('hidden');
            }
          }

          setActiveDropdown(dropdownName);
        }
      };

  return (
    <>
          <ul className='text-xl h-screen overflow-y-auto pb-10 '>
                        <li>
                            <Link to="/home">
                                <img
                                    src={logo}
                                    alt="Mi Imagen"
                                    className="w-24 h-30 mx-auto mb-10 cursor-pointer"
                                />
                            </Link>
                        </li>



                        <li className='w-3/4 md:w-1/3 lg:w-full mx-auto'>
                            <Link to="/home" className={` py-2 px-4 block ${margen}`}>
                                <button

                                className="flex items-center justify-between w-full px-4 py-2 text-xl bg-blue-950 text-white rounded-md"
                                >
                                    <div className="flex items-center space-x-5">
                                        <FontAwesomeIcon icon={faHome} className="text-xl" />
                                        <span className="font-bold uppercase">Inicio</span>
                                    </div>
                                </button>
                            </Link>
                        </li>

                    {/* Dropdown */}
                        <li to="/home" className= {` py-2 px-4 block w-3/4 md:w-1/3 lg:w-full mx-auto  ${margen}`} >
                            <button
                                onClick={ () =>  handleDropdownClick(1)}
                                className="flex items-center justify-between w-full px-4 py-2 text-xl bg-blue-950 text-white rounded-md"
                                >
                                <div className="flex items-center space-x-5">
                                    <FontAwesomeIcon icon={faTable} className="text-xl" />
                                    <span className="font-bold uppercase">Registros</span>
                                </div>
                                <FontAwesomeIcon icon={faCaretDown} className="text-xl ml-auto" />
                            </button>


                            <ul className={`${activeDropdown === 1 ? '' : 'hidden'} text-base text-indigo-800`}
                             ref={dropDownMenu1} >
                                <li>
                                    <Link to="/home/list-registros" className= {`hover:bg-indigo-950 hover:text-white py-2 px-4 block text-center ${margen}`}>
                                        <span  className='font-bold'>
                                            <FontAwesomeIcon icon={faGears}/> Administrar
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/home/reportes" className= {`hover:bg-indigo-950 hover:text-white py-2 px-4 block text-center ${margen}`}>
                                        <span  className='font-bold'>
                                            <FontAwesomeIcon icon={faNewspaper}/> Reportes
                                        </span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to="/home/edit" className= {`hover:bg-indigo-950 hover:text-white py-2 px-4 block text-center ${margen}`}>
                                        <span  className='font-bold'>
                                        <FontAwesomeIcon icon={faPenToSquare} />  Editar
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/home/create" className= {`hover:bg-indigo-950 hover:text-white py-2 px-4 block text-center ${margen}`}>
                                        <span  className="font-bold">
                                        <FontAwesomeIcon icon={faSquarePlus} /> Crear
                                        </span>
                                    </Link>
                                </li> */}
                            </ul>
                        </li>

                    {/* Dropdown */}
                    <li to="/home" className= {` py-2 px-4 block  w-3/4 md:w-1/3 lg:w-full mx-auto ${margen}`} >
                            <button
                                onClick={() => handleDropdownClick(2)}
                                className="flex items-center justify-between w-full px-4 py-2 text-xl bg-blue-950 text-white rounded-md"
                                >
                                <div className="flex items-center space-x-5">
                                    <FontAwesomeIcon icon={faCoins} className="text-xl" />
                                    <span className="font-bold uppercase">Finanzas</span>
                                </div>
                                <FontAwesomeIcon icon={faCaretDown} className="text-xl ml-auto" />
                            </button>


                            <ul className={`${activeDropdown === 2 ? '' : 'hidden'} text-base text-indigo-800`}
                             ref={dropDownMenu2} >
                                <li>
                                    <Link to="/home/list-finanzas" className= {`hover:bg-indigo-950 hover:text-white py-2 px-4 block text-center ${margen}`}>
                                        <span  className='font-bold'>
                                            <FontAwesomeIcon icon={faTable}/> Administrar
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/home/reportes" className= {`hover:bg-indigo-950 hover:text-white py-2 px-4 block text-center ${margen}`}>
                                        <span  className='font-bold'>
                                            <FontAwesomeIcon icon={faNewspaper}/> Reportes
                                        </span>
                                    </Link>
                                </li>

                            </ul>
                        </li>

                        {/* Dropdown */}
                    <li to="/home" className= {` py-2 px-4 block w-3/4 md:w-1/3 lg:w-full mx-auto  ${margen}`} >
                            <button
                                onClick={() => handleDropdownClick(3)}
                                className="flex items-center justify-between w-full px-4 py-2 text-xl bg-blue-950 text-white rounded-md"
                                >
                                <div className="flex items-center space-x-5">
                                    <FontAwesomeIcon icon={faHouseUser} className="text-xl" />
                                    <span className="font-bold uppercase">Campos</span>
                                </div>
                                <FontAwesomeIcon icon={faCaretDown} className="text-xl ml-auto" />
                            </button>


                            <ul className={`${activeDropdown === 3 ? '' : ' transition ease-in-out delay-150 hidden '} text-base text-indigo-800`}
                            ref={dropDownMenu3} >
                                <li>
                                    <Link to="/home/list-campos" className= {`hover:bg-indigo-950 hover:text-white py-2 px-4 block text-center ${margen}`}>
                                        <span  className='font-bold'>
                                            <FontAwesomeIcon icon={faTable}/> Administrar
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/home/reportes" className= {`hover:bg-indigo-950 hover:text-white py-2 px-4 block text-center ${margen}`}>
                                        <span  className='font-bold'>
                                            <FontAwesomeIcon icon={faNewspaper}/> Reportes
                                        </span>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        {/* ================ */}
                        <li>
                            <Link to="/home/perfil" className={` py-2 px-4 block w-3/4 md:w-1/3 lg:w-full mx-auto ${margen}`}>
                                <button

                                className="flex items-center justify-between w-full px-4 py-2 text-xl bg-blue-950 text-white rounded-md"
                                >
                                    <div className="flex items-center space-x-5">
                                        <FontAwesomeIcon icon={faUser} className="text-xl" />
                                        <span className="font-bold uppercase">Perfil</span>
                                    </div>
                                </button>
                            </Link>
                        </li>




                    </ul>
    </>
  )
}

export default NavElements
