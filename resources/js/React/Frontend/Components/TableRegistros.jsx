import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSave, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import ModalForm from './ModalForm';

const TableRegistros = ({data}) => {

    const titulo ='Editar Registro';

  return (
    <>



    <div class="table-responsive col-lg-9 col-11  mx-auto">
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
                            <div className="row justify-content-center d-lg-flex d-none">
                                <div className="col-2 text-center">
                                    <button   data-bs-toggle="modal" data-bs-target="#exampleModal"  type="button" className='btn btn-info' style={{ borderRadius: '50px' }}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </div>
                                <div className="col-2 text-center">
                                    <button className='btn btn-danger' style={{ borderRadius: '50px' }}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>
                            <div class="dropdown d-lg-none">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <div className="d-flex justify-content-center gap-3">
                                    <button   data-bs-toggle="modal" data-bs-target="#exampleModal"  type="button" className='btn btn-info ' style={{ borderRadius: '50px' }}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>

                                    <button className='btn btn-danger ' style={{ borderRadius: '50px' }}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                                </ul>
                            </div>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <ModalForm title={titulo}/>
        </div>



    </>
  )
}

export default TableRegistros
