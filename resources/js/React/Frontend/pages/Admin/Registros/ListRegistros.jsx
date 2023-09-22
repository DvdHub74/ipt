import { faAdd, faFilePdf, faPenToSquare, faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TableRegistros from '../../../Components/TableRegistros';
import axios from 'axios';
import ModalForm from '../../../Components/ModalForm';
const ListRegistros = () => {
    const [dataJson, setDataJson]= useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const title = 'Nuevo Registro';

        useEffect(() => {

            const fetchData = async () => {
                    try {
                        const token = localStorage.getItem('token');
                        const config = {
                            headers:{
                                "Content-Type": "application/json",
                                Authorization : `Bearer ${token}`
                            }
                        }

                        const response = await axios.get('api/data/people', config);


                        setDataJson(response.data[0])
                    } catch (error) {
                        console.log(error);
                    }
                }

            fetchData();
        }, []);

        const handleSearchChange = (event) => {
            setSearchTerm(event.target.value);
          };

        // const filteredData = dataJson && dataJson.length > 0
        // ? dataJson.filter((item) =>
        //     item.names.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //     item.lastnames.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //     item.age.toLowerCase().includes(searchTerm.toLowerCase())
        //   )
        // : dataJson;

  return (
    <>
        <div className='container-fluid p-0 m-0 vw-100 vh-100 px-lg-5 mt-2'>
               <div className="row justify-content-centeralign-items-center g-2">
                    <div className="col-lg-8 mx-auto  text-center">
                        <span className='titlePage'>
                            Lista de Registros
                        </span>
                    </div>
               </div>
                <div className="row mt-5 mx-auto py-2 px-lg-5 ">
                <section className='col-lg-6 col-sm-6 order-2 order-sm-1 order-lg-1 col-12  ms-lg-5 px-lg-5'>
                        <input className="form-control mx-auto w-lg-50 w-75 mt-3 mt-lg-0 mt-md-0 border-end-0 shadow ps-4  rounded-pill"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        type="search" placeholder="Buscar..." id="example-search-input"/>
                </section>
                <section className='col-lg-5 col-sm-6 col-xs-12 order-sm-2  mt-3  mt-lg-0 mt-md-0 order-1  order-lg-2  col-12 justify-content-center text-center'>

                    <button className='btn me-3 w-lg-25 btn-warning shadow  rounded-pill' >
                       <FontAwesomeIcon icon={faFilePdf}/> Reporte
                    </button>

                    <button

                    data-bs-toggle="modal" data-bs-target="#exampleModal2"  type="button" className='btn btn-success shadow w-lg-25  rounded-pill' style={{ borderRadius: '50px' }}>
                        <FontAwesomeIcon icon={faAdd}/> Nuevo
                    </button>

                </section>

                </div>

                <div className="row mt-5 w-100">
                     <TableRegistros data={dataJson} />
                </div>

        </div>
        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <ModalForm title={title}/>
        </div>
    </>
  )
}

export default ListRegistros

