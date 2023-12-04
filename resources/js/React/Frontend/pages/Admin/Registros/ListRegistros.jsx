import {
    faAdd,
    faFilePdf,
    faPenToSquare,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableRegistros from "../../../Components/TableRegistros";
import ModalForm from "../../../Components/ModalForm";
const ListRegistros = () => {
    const [dataJson, setDataJson] = useState([]);
    const [perPage, setPerPage] = useState(5);
    const [total, setTotal] = useState(null);
    const [loadingData, setloadingData] = useState(false);
    const [create, setCreate] = useState(null);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getData = async () => {
            setloadingData(false);
            try {
                const token = localStorage.getItem("token");
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                let filters =
                    "?per_page=" +
                    5 +
                    "&page=" +
                    page +
                    "&per_page=" +
                    perPage +
                    "&name=" +
                    searchTerm;
                const url = "api/data/people" + filters;
                const response = await axios.get(url, config);

                setPage(response.data[0].current_page);
                setLastPage(response.data[0].last_page);
                setTotal(response.data[0].total);
                setDataJson(response.data[0]);
                setloadingData(true);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [page, perPage, searchTerm]);

    const handleChange = (newValue) => {
        setPage(newValue);
    };
    const handleChangeSelect = (val) => {
        setPerPage(val);
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div className="container-fluid p-0 m-0 mt-2">
                <div className="row justify-content-centeralign-items-center g-2">
                    <div className="col-lg-8 mx-auto  text-center">
                        <span className="titlePage">Lista de Registros</span>
                    </div>
                </div>
                <div className="row mt-5 mx-auto py-2 px-lg-5 ">
                    <section className="col-lg-6 col-sm-6 order-2 order-sm-1 order-lg-1 col-12  ms-lg-5 px-lg-5">
                        <input
                            className="form-control mx-auto w-lg-50 w-75 mt-3 mt-lg-0 mt-md-0 border-end-0 shadow-sm ps-4  rounded"
                            onChange={handleSearchChange}
                            type="search"
                            placeholder="Buscar..."
                            id="example-search-input"
                        />
                    </section>
                    <section className="col-lg-4 col-sm-6 col-xs-12 order-sm-2  mt-3  mt-lg-0 mt-md-0 order-1  order-lg-2  col-12 text-lg-end text-center">
                        <button className="btn me-3 w-lg-25 btn-danger shadow">
                            Reporte &nbsp;
                            <FontAwesomeIcon icon={faFilePdf} />
                        </button>

                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                            type="button"
                            onClick={() => setCreate(true)}
                            className="btn btn-success shadow w-lg-25"
                        >
                            Nuevo &nbsp;
                            <FontAwesomeIcon icon={faAdd} />
                        </button>
                    </section>
                </div>

                <div className="row mt-5">
                    <TableRegistros
                        data={dataJson}
                        page={page}
                        last={lastPage}
                        total={total}
                        onChange={handleChange}
                        onSelect={handleChangeSelect}
                        loaded={loadingData}
                    />
                </div>
            </div>
            <div className="container p-0 m-0">
                <div
                    className="modal fade"
                    id="exampleModal2"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <ModalForm create={create} />
                </div>
            </div>
        </>
    );
};

export default ListRegistros;
