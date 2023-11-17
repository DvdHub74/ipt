import React,{useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import {
    faPenToSquare,
    faSave,
    faTrash,
    faX,
} from "@fortawesome/free-solid-svg-icons";
const Reportes = () => {
    const [log, setLog] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        const getData= async ()=>{
            const token = localStorage.getItem('token');
            const config = {
                headers:{
                    Authorization : `Bearer ${token}`
                }
            }
            try {
                const response = await axios('api/resource/logs', config);
                setLog(response)
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    }, [])

    return (
        <>
            <div className="container-fluid p-5">
                <div className="row d-flex justify-content-center">
                    <h1 className="text-center">Logs</h1>
                </div>
            <div className="row mt-2 d-flex justify-content-center">
                    <div className="col-md-8">
                        <div class="table-responsive">
                            <section className="card">
                                <div className="table-responsive w-100  mx-auto ">
                                    <div className="card shadow py-4 ">
                                        <table
                                            className="table table-light table-hover"
                                            style={{ borderRadius: "10px" }}
                                        >
                                            <thead className="table-secondary">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="text-center"
                                                    >
                                                        Usuario
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-center"
                                                    >
                                                        Fecha
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-center"
                                                    >
                                                        Acción
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-center"
                                                    >
                                                        Respuesta
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {loaded && log  &&
                                                <tr>
                                                    <td>Admin</td>
                                                    <td>$1000</td>
                                                    <td>2 años</td>
                                                    <td>2 años</td>
                                                </tr>
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reportes;
