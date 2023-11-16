import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faSave,
    faTrash,
    faX,
} from "@fortawesome/free-solid-svg-icons";
import ModalForm from "./ModalForm";

const TableRegistros = ({ data, page, last, onChange, loaded}) => {

    const titulo = "Editar Registro";

    const people = data.data;


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


    return (
        <>
            <div className="table-responsive col-lg-9 col-11  mx-auto ">
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

                <nav aria-label="Page navigation example">
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
                <ModalForm title={titulo} />
            </div>
        </>
    );
};

export default TableRegistros;
