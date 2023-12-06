import React, { useState, useEffect } from "react";
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
    const [lastPage, setLastPage] = useState("");
    const [perPage, setPerPage] = useState(5);
    const [total, setTotal] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {

        const getData = async () => {
            setLoaded(false);
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const response = await axios(
                    "api/resource/logs?page=" + page + "&per_page=" + perPage,
                    config
                );
                const data = response.data.data;
                setLoaded(true);
                setLog(data);

                setPage(response.data.current_page);
                setLastPage(response.data.last_page);
                setTotal(response.data.total);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [page, perPage]);

    const handleClick = (val) => {
        setPage(val);
    };
    const handleChange = (event) => {
        const selectedOption = event.target.value;
        setPerPage(selectedOption);
    };
    const opciones = [5, 10, 20, 50];

    const totalPages = Math.ceil(total / perPage);

    let startPage = Math.max(1, page - Math.floor(perPage / 2));
    let endPage = Math.min(startPage + 4, totalPages);

    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }

    const pageItems = [];
    for (let pageItem = startPage; pageItem <= endPage; pageItem++) {
        pageItems.push(
            <li
                key={pageItem}
                className={`page-item ${pageItem === page ? "active" : ""}`}
            >
                <button
                    className="page-link"
                    onClick={() => handleClick(pageItem)}
                >
                    {pageItem}
                </button>
            </li>
        );
    }

    return (
        <>
            <div className="container-fluid p-5">
                <div className="row d-flex justify-content-center">
                    <h1 className="text-center">Logs</h1>
                </div>
                <div className="row mt-2 d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-1">
                                <select
                                    onChange={handleChange}
                                    className="form-select me-2 mb-3"
                                >
                                    {opciones.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <p className="col-md-2 mt-1">
                                Registros por pagina
                            </p>
                        </div>
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
                                                        ID
                                                    </th>
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
                                                        IP
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
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {loaded &&
                                                    log.map((log, index) => (
                                                        <tr key={index}>
                                                            <td className="text-center">
                                                                {
                                                                    log.id
                                                                }
                                                            </td>
                                                            <td className="text-center">
                                                                {
                                                                    log.data
                                                                        .user
                                                                        .name
                                                                }
                                                            </td>
                                                            <td className="text-center">
                                                                {log.data.ip}
                                                            </td>
                                                            <td className="text-center">
                                                                {
                                                                    log.data
                                                                        .timestamp
                                                                }
                                                            </td>
                                                            <td className="text-center">
                                                                {
                                                                    log.data
                                                                        .action
                                                                }
                                                            </td>
                                                        </tr>
                                                    ))}
                                                {!loaded && (
                                                    <tr>
                                                        <td
                                                            colSpan="5"
                                                            className="text-center"
                                                        >
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
                                        <section className="d-flex  mt-3 justify-content-center">
                                            <nav aria-label="Page navigation example ">
                                                <ul className="pagination">
                                                    <li
                                                        className={`page-item ${
                                                            page === 1
                                                                ? "disabled"
                                                                : ""
                                                        }`}
                                                    >
                                                        <button
                                                            className="page-link"
                                                            onClick={() =>
                                                                handleClick(
                                                                    page - 1
                                                                )
                                                            }
                                                            aria-label="Previous"
                                                        >
                                                            <span aria-hidden="true">
                                                                &laquo;
                                                            </span>
                                                            <span className="sr-only">
                                                                Previous
                                                            </span>
                                                        </button>
                                                    </li>
                                                    {pageItems}
                                                    <li
                                                        className={`page-item ${
                                                            page === lastPage
                                                                ? "disabled"
                                                                : ""
                                                        }`}
                                                    >
                                                        <button
                                                            className="page-link"
                                                            onClick={() =>
                                                                handleClick(
                                                                    page + 1
                                                                )
                                                            }
                                                            aria-label="Next"
                                                        >
                                                            <span aria-hidden="true">
                                                                &raquo;
                                                            </span>
                                                            <span className="sr-only">
                                                                Next
                                                            </span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </section>
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
