import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
const TableRegistros = ({data}) => {
    console.log(data);

  return (
    <>
    <div class="table-responsive col-9  mx-auto">
        <table class="table table-light table-hover">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col" className='text-center' >Nombre</th>
                        <th scope="col" className='text-center' >Apellido</th>
                        <th scope="col" className='text-center' >Edad</th>
                        <th scope="col" className='text-center' >Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {data && data.map((person, index) => (
                    <tr key={index}>
                        <td className='text-center'>{person.names}</td>
                        <td className='text-center'>{person.lastnames}</td>
                        <td className='text-center'>{person.age}</td>
                        <td className='text-center'>
                            <div className="row justify-content-center">
                                <div className="col-2 text-center">
                                    <button className='btn btn-info' style={{ borderRadius: '50px' }}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </div>
                                <div className="col-2 text-center">
                                    <button className='btn btn-danger' style={{ borderRadius: '50px' }}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    </>
  )
}

export default TableRegistros
