import React from "react";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import {
    faPenToSquare,
    faSave,
    faTrash,
    faX,
} from "@fortawesome/free-solid-svg-icons";

const ListCampos = () => {
    const chart1Ref = useRef(null);
    const chart2Ref = useRef(null);

    useEffect(() => {
        new Chart(chart1Ref.current, {
            type: "line",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
        });
        new Chart(chart2Ref.current, {
            type: "line",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            "rgba(255, 99, 32, 0.5)",
                            "rgba(54, 162, 35, 0.5)",
                            "rgba(255, 206, 186, 0.5)",
                            "rgba(75, 192, 92, 0.5)",
                            "rgba(153, 102, 55, 0.5)",
                            "rgba(255, 159, 164, 0.5)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 32, 1)",
                            "rgba(54, 162, 35, 1)",
                            "rgba(255, 206, 186, 1)",
                            "rgba(75, 192, 92, 1)",
                            "rgba(153, 102, 55, 1)",
                            "rgba(255, 159, 164, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
        });
    });

    return (
        <>
            <main className="p-5">
                <div className="row text-center">
                    <div className="col">
                        <h1 className="display-2">Datos 2</h1>
                    </div>
                </div>
                <div className="row mt-2 mb-5 d-flex justify-content-center">
                    <div className="col-md-5 p-5  shadow-sm">
                        <canvas ref={chart1Ref}></canvas>
                    </div>
                    <div className="col-md-5 p-5  shadow-sm">
                        <canvas ref={chart2Ref}></canvas>
                    </div>
                </div>
                <div className="row mt-2 d-flex justify-content-center">
                    <div className="col-md-5">
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
                                                        Monto
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-center"
                                                    >
                                                        Lapzo
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-center"
                                                    >
                                                        Acciones
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Admin</td>
                                                    <td>$1000</td>
                                                    <td>2 años</td>
                                                    <td className="d-flex justify-content-center">
                                                        <div className="row d-lg-flex d-none">
                                                            <div className="col-md-6 text-center">
                                                                <button
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#exampleModal"
                                                                    type="button"
                                                                    className="btn btn-info"
                                                                    style={{
                                                                        borderRadius:
                                                                            "50px",
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faPenToSquare
                                                                        }
                                                                    />
                                                                </button>
                                                            </div>
                                                            <div className="col-md-6 text-center">
                                                                <button
                                                                    className="btn btn-danger"
                                                                    style={{
                                                                        borderRadius:
                                                                            "50px",
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faTrash
                                                                        }
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
                                                                            icon={
                                                                                faPenToSquare
                                                                            }
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
                                                                            icon={
                                                                                faTrash
                                                                            }
                                                                        />
                                                                    </button>
                                                                </div>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-5">
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
                                                        Monto
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-center"
                                                    >
                                                        Lap
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-center"
                                                    >
                                                        Acciones
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                    <td>Admin</td>
                                                    <td>$1000</td>
                                                    <td>2 años</td>
                                                    <td className="d-flex justify-content-center">
                                                        <div className="row d-lg-flex d-none">
                                                            <div className="col-md-6 text-center">
                                                                <button
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#exampleModal"
                                                                    type="button"
                                                                    className="btn btn-info"
                                                                    style={{
                                                                        borderRadius:
                                                                            "50px",
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faPenToSquare
                                                                        }
                                                                    />
                                                                </button>
                                                            </div>
                                                            <div className="col-md-6 text-center">
                                                                <button
                                                                    className="btn btn-danger"
                                                                    style={{
                                                                        borderRadius:
                                                                            "50px",
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faTrash
                                                                        }
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
                                                                            icon={
                                                                                faPenToSquare
                                                                            }
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
                                                                            icon={
                                                                                faTrash
                                                                            }
                                                                        />
                                                                    </button>
                                                                </div>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ListCampos;
