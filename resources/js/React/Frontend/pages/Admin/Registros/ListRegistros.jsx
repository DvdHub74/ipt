import { faAdd, faFilePdf, faPenToSquare, faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TableRegistros from '../../../Components/TableRegistros';
import axios from 'axios';
const ListRegistros = () => {
    const [dataJson, setDataJson]= useState([]);

        useEffect(() => {

            const fetchData = async () => {
                    try {
                        const response = await axios.get('api/json');

                        setDataJson(response.data);

                    } catch (error) {
                        console.log(error);
                    }
                }

            fetchData();
        }, []);



  return (
    <>
        <div className='container-fluid p-0 m-0 vw-100 vh-100 px-5 mt-2'>
               <div class="row justify-content-centeralign-items-center g-2">
                    <div class="col-lg-8 mx-auto  text-center">
                        <span className='titlePage'>
                            Lista de Registros
                        </span>
                    </div>
               </div>
                <div className="d-flex justify-content-between mt-5 w-75 mx-auto py-2 ">
                <section className='col-6  px-5'>
                        <input class="form-control mx-auto w-75 border-end-0 shadow ps-4 border rounded-pill" type="search" placeholder="Buscar..." id="example-search-input"/>
                </section>
                <section className='col-6   justify-content-center text-center'>

                    <button className='btn me-3 btn-warning shadow  rounded-pill' >
                       <FontAwesomeIcon icon={faFilePdf}/> Reporte
                    </button>
                    <button className='btn btn-success shadow  rounded-pill' >
                       <FontAwesomeIcon icon={faAdd}/> Nuevo
                    </button>

                </section>

                </div>

                <div className="row mt-5">
                    <TableRegistros data={dataJson} />

                </div>

        </div>
    </>
  )
}

export default ListRegistros

