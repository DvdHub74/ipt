import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import {
    faPenToSquare,
    faSave,
    faTrash,
    faX,
} from "@fortawesome/free-solid-svg-icons";
import ModalForm from "./ModalForm";

const TableRegistros = ({ data, page, last,onChange, onSelect, loaded}) => {
    const [value, setValue] = useState(null);
    const [personArray, setPersonArray] = useState(null);

    const people = data.data;

    const opciones = [5, 10, 20,50];
    const handleChange = (e) => {
        const selectedOption = e.target.value;
        if(page > 1){
            onChange(1);
        }
        onSelect(selectedOption)
     };

    const pageItems = [];

        for (let pageItem = 1; pageItem <= last; pageItem++){
            pageItems.push(
                <li
                key={pageItem}
                className={`page-item ${pageItem === page ? "active" : ""}`}
            >
                <button className="page-link" onClick={() => handleButtonClick(pageItem)}>
                {pageItem}
                </button>
            </li>
            );
        }

    const handleButtonClick = (page) => {
        onChange(page);
      };
    const handleEdit = (person) => {
    setValue(false)

    setPersonArray(person);

    }
    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        const config = {
            headers:{
                Authorization : `Bearer ${token}`
            }
        }
        try {
            const url = 'api/data/people?id='+id;
            const response = await axios.delete(url,config);
            Swal.fire({
                title: "Registro eliiminado correctamente!",
                icon: "success",
            });

            setTimeout(() => {
                Swal.close();
                window.location.reload();
            }, 1000);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="table-responsive col-lg-9 col-11  mx-auto ">
                <div className="row">
                    <div className="col-md-1">
                        <select onChange={handleChange} className="form-select me-2 mb-3" >
                            {opciones.map((option) => (
                                <option key={option} value={option}>
                                {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <p className="col-md-2 mt-1">Registros por pagina</p>
                </div>

                <table className="table table-light table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col" className="text-center">
                                Nombre
                            </th>
                            <th scope="col" className="text-center">
                                Apellido
                            </th>
                            <th scope="col" className="text-center">
                                Edad
                            </th>
                            <th scope="col" className="text-center">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {loaded && people &&
                            people.map((person, index) => (
                                <tr key={index}>
                                    <td className="text-center">
                                        {person.names}
                                    </td>
                                    <td className="text-center">
                                        {person.lastnames}
                                    </td>
                                    <td className="text-center">
                                        {person.age}
                                    </td>
                                    <td className="text-center">
                                        <div className="row justify-content-center d-lg-flex d-none">
                                            <div className="col-2 text-center">
                                                <button
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    type="button"
                                                    onClick={() => handleEdit(person)}
                                                    className="btn btn-info"
                                                    style={{
                                                        borderRadius: "50px",
                                                    }}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faPenToSquare}
                                                    />
                                                </button>
                                            </div>
                                            <div className="col-2 text-center">
                                                <button
                                                    onClick={() => handleDelete(person.id)}
                                                    className="btn btn-danger"
                                                    style={{
                                                        borderRadius: "50px",
                                                    }}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="dropdown d-lg-none">
                                            <button
                                                className="btn btn-secondary dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            ></button>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuButton1"
                                            >
                                                <div className="d-flex justify-content-center gap-3">
                                                    <button
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        type="button"
                                                        className="btn btn-info "
                                                        style={{
                                                            borderRadius:
                                                                "50px",
                                                        }}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faPenToSquare}
                                                        />
                                                    </button>

                                                    <button
                                                        className="btn btn-danger "
                                                        style={{
                                                            borderRadius:
                                                                "50px",
                                                        }}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faTrash}
                                                        />
                                                    </button>
                                                </div>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        {!loaded && (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    <div
                                        className="spinner-border text-primary"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <section className="d-flex justify-content-center">

                <nav aria-label="Page navigation example ">
                        <ul className="pagination">
                        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handleButtonClick(page - 1)} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                            </button>
                        </li>
                        {pageItems}
                        <li className={`page-item ${page === last ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handleButtonClick(page + 1)} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                            </button>
                        </li>
                        </ul>
                    </nav>
                </section>
            </div>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                >
                <ModalForm  create={value} personArray={personArray} />
            </div>
        </>
    );
};

export default TableRegistros;
