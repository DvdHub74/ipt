import React, {useRef} from 'react'
import ModalForm from '../../../Components/ModalForm';
import Table from '../../../Components/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faPlus,
faSearch,
} from '@fortawesome/free-solid-svg-icons';

const ListRegistros = () => {
    const modalMain = useRef(null);
    const añadirNuevo ='Agregar Nuevo Registro'

    const handleOpenModal = () => {
        modalMain.current.classList.remove('hidden');
    }
  return (
    <>
        <div className='p-2 mb-7'>
            <h1 className='text-4xl lg:text-4xl xl:text-5xl text-blue-900 font-bold text-center'>
                Lista de registros
            </h1>
        </div>
        <div className='p-2 px-10 mb-7 flex justify-between'>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4  relative">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-full px-8 py-2 pl-10 border-none rounded-lg shadow-md focus:none"
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute left-3 top-3 text-lg text-gray-500"
                />
            </div>

            <button id="modal-close" className="px-4 py-2 text-sm sm:text-md lg:text-lg xl:text-lg md:text-lg
            font-semibold text-white bg-green-400 rounded-lg shadow-md hover:bg-green-600"
            onClick={handleOpenModal}>
               <FontAwesomeIcon  icon={faPlus}/> Nuevo
            </button>
        </div>

        <div className='flex justify-center items-center px-10 '>
            <Table/>
        </div>

        <div id="myModal" className="modal hidden fixed inset-0 w-full h-full flex items-center justify-center" ref={modalMain}
         style={{ zIndex: 400 }}>
            <ModalForm modalMain={modalMain} title={añadirNuevo}/>
        </div>
    </>
  )
}

export default ListRegistros
