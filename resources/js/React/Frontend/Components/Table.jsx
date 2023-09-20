import React, {useEffect, useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalForm from './ModalForm';
import {
faPenToSquare,
faTrash
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Table = () => {
    const [jsonData, setJsonData] = useState(null);

    const modalMain = useRef(null);
    const añadirNuevo ='Editar Registro'

    const handleOpenModal = () => {
        modalMain.current.classList.remove('hidden');
    }

    useEffect(() => {
        const List= async () => {
            try {
                const {data} = await axios.get('/json/prueba.json')
                setJsonData(data);
            } catch (error) {
                console.log(error);
            }
        }
        List();
    }, [])

  return (
      <>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className=" py-3  text-center">
                        Nombres
                    </th>
                    <th scope="col" className=" py-3  text-center">
                        Apellidos
                    </th>
                    <th scope="col" className="w-1/5 text-center">
                        Edad
                    </th>
                    <th scope="col" className="w-1/5 text-center">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
            {jsonData && jsonData.map((item) => (
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={item.names}>
                    <td scope="row" className="px-6 py-4  text-center">
                        {item.names}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.lastnames}
                    </td>
                    <td className="px-6 py-4 text-center">
                        {item.age}
                    </td>

                    <td className="py-4 flex justify-center gap-5">
                        <button  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                         onClick={handleOpenModal}
                        >
                            <FontAwesomeIcon  icon={faPenToSquare}/> Editar
                        </button>
                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                            <FontAwesomeIcon  icon={faTrash}/> Eliminar
                        </a>
                    </td>
                </tr>
            ))}

            </tbody>
        </table>
    </div>

        <div id="myModal" className="modal hidden fixed inset-0 w-full h-full flex items-center justify-center" ref={modalMain}
         style={{ zIndex: 400 }}>
            <ModalForm modalMain={modalMain} title={añadirNuevo} />
        </div>

      </>
  );
}

export default Table
