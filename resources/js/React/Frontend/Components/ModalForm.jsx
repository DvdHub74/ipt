import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const ModalForm = ({ create, personArray }) => {
    const [names, setNames] = useState("");
    const [lastNames, setLastNames] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");
    const [ministrieOne, setMinistrieOne] = useState(null);
    const [statePeople, setStatePeople] = useState(null);
    const [birth, setBirth] = useState(null);
    const [ministries, setMinistries] = useState([]);

    useEffect(() => {
        const getMinistries = async () => {
            try {
                const token = localStorage.getItem("token");
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const url = "api/resource/ministrie";
                const response = await axios.get(url, config);

                setMinistries(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getMinistries();
    }, []);

    useEffect(() => {
        if (personArray) {
            const person = personArray;
            setNames(person.names);
            setLastNames(person.lastnames);
            setAge(person.age);
            setId(person.id);
            setMinistrieOne(person.ministrie_id);
            setBirth(person.birthday);
            setStatePeople(person.state);
        }
    }, [personArray]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        if (create) {
            try {
                const url = "api/data/people";

                const data = {
                    names: names,
                    lastnames: lastNames,
                    age: age,
                    ministrie: ministrieOne,
                    state: statePeople,
                    birthday: birth,
                };
                const response = await axios.post(
                    url,
                    JSON.stringify(data),
                    config
                );

                Swal.fire({
                    title: "Registro creado correctamente!",
                    icon: "success",
                });

                setTimeout(() => {
                    Swal.close();
                    window.location.reload();
                }, 1000);
            } catch (error) {
                Swal.fire({
                    title: "Ocurrio un error",
                    icon: "error",
                    cancelButtonText: "Cerrar",
                    showCancelButton: true,
                    showConfirmButton: false,
                });
                setTimeout(() => {
                    Swal.close();
                }, 1000);
            }
        } else {
            try {
                const url = "api/data/people";

                const data = {
                    id: id,
                    names: names,
                    lastnames: lastNames,
                    age: age,
                    ministrie: ministrieOne,
                    state: statePeople,
                    birthday: birth,
                };
                const response = await axios.put(
                    url,
                    JSON.stringify(data),
                    config
                );
                Swal.fire({
                    title: "Registro modificado correctamente!",
                    icon: "success",
                });

                setTimeout(() => {
                    Swal.close();
                    window.location.reload();
                }, 1500);
            } catch (error) {
                Swal.fire({
                    title: "Ocurrio un error",
                    icon: "error",
                    cancelButtonText: "Cerrar",
                    showCancelButton: true,
                    showConfirmButton: false,
                });
                setTimeout(() => {
                    Swal.close();
                }, 1500);
            }
        }
    };
    const inputStyle = {
        background: "none",
        border: "2px solid #ccc",
        transition: "border-color 0.2s",
        boxShadow: "none",
        borderRadius: "10px",
    };

    return (
        <>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header ">
                        <button
                            type="button"
                            className="btn-close r-0"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body  w-100">
                        <h3
                            className="text-center  "
                            id="exampleModalLabel"
                            style={{ color: "#2F288B" }}
                        >
                            {create == true
                                ? "Nuevo Registro"
                                : "Editar Registro"}
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-5 mt-3 p-3">
                                <div className="col-12 col-md-6  my-4 mx-auto">
                                    <input
                                        type="text"
                                        className="form-control ps-3 customControl"
                                        placeholder="Nombre..."
                                        value={names}
                                        onChange={(e) =>
                                            setNames(e.target.value)
                                        }
                                        style={inputStyle}
                                        onFocus={(e) => {
                                            e.target.style.border =
                                                "1px solid #463EB6";
                                            e.target.placeholder = "";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.border =
                                                "2px solid #ccc";
                                            e.target.placeholder = "Nombre...";
                                        }}
                                    />
                                </div>
                                <div className="col-12 col-md-6  my-4 mx-auto">
                                    <input
                                        type="text"
                                        className="form-control ps-3 customControl"
                                        placeholder="Apellido..."
                                        value={lastNames}
                                        onChange={(e) =>
                                            setLastNames(e.target.value)
                                        }
                                        style={inputStyle}
                                        onFocus={(e) => {
                                            e.target.style.border =
                                                "1px solid #463EB6";
                                            e.target.placeholder = "";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.border =
                                                "2px solid #ccc";
                                            e.target.placeholder =
                                                "Apellido...";
                                        }}
                                    />
                                </div>
                                <div className="col-12 col-md-6  my-4 mx-auto">
                                    <input
                                        type="number"
                                        className="form-control ps-3 customControl"
                                        placeholder="Edad..."
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        style={inputStyle}
                                        onFocus={(e) => {
                                            e.target.style.border =
                                                "1px solid #463EB6";
                                            e.target.placeholder = "";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.border =
                                                "2px solid #ccc";
                                            e.target.placeholder = "Edad...";
                                        }}
                                    />
                                </div>
                                <div className="col-12 col-md-6  my-4 mx-auto">
                                    <select
                                        className="form-control ps-3 customControl"
                                        placeholder="Ministerio..."
                                        value={ministrieOne}
                                        onChange={(e) =>
                                            setMinistrieOne(e.target.value)
                                        }
                                        style={{...inputStyle}}
                                        onFocus={(e) => {
                                            e.target.style.border =
                                                "1px solid #463EB6";
                                            e.target.placeholder = "";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.border =
                                                "2px solid #ccc";
                                            e.target.placeholder = "Edad...";
                                        }}
                                    >
                                        <option hidden>
                                            <span>
                                                Ministerio
                                            </span>
                                        </option>
                                        {ministries &&
                                            ministries.map((option) => (
                                                <option
                                                    key={option.id}
                                                    value={option.id}
                                                    selected={
                                                        option.id ===
                                                        ministrieOne
                                                    }
                                                >
                                                    {option.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div className="col-12 col-md-6  my-4 mx-auto d-flex justify-content-between">
                                    <span>
                                        <input
                                            type="radio"
                                            checked={statePeople == 1}
                                            value={1}
                                            name="state"
                                            onChange={(e) =>
                                                setStatePeople(e.target.value)
                                            }
                                        />
                                        Inicial
                                    </span>
                                    <span>
                                        <input
                                            type="radio"
                                            checked={statePeople == 2}
                                            value={2}
                                            name="state"
                                            onChange={(e) =>
                                                setStatePeople(e.target.value)
                                            }
                                        />
                                        Proceso <br />
                                    </span>
                                    <span>
                                        <input
                                            type="radio"
                                            checked={statePeople == 3}
                                            value={3}
                                            name="state"
                                            onChange={(e) =>
                                                setStatePeople(e.target.value)
                                            }
                                        />
                                        Propiedad <br />
                                    </span>
                                </div>
                                <div className="col-12 col-md-6  my-4 mx-auto d-flex justify-content-between">
                                    <input
                                        type="date"
                                        name="date"
                                        id=""
                                        style={{
                                            ...inputStyle,
                                            width: "100%",
                                        }}
                                        className="p-1"
                                        value={birth}
                                        onChange={(e) =>
                                            setBirth(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="modal-footer px-5">
                                <button
                                    type="submit"
                                    className="btn btnMenu mx-auto"
                                    style={{
                                        background: "#2F288B",
                                        color: "white",
                                        textTransform: "uppercase",
                                        maxWidth: '200px',
                                        width: '150px'
                                    }}
                                >
                                    <FontAwesomeIcon icon={faSave} />
                                    {""} Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalForm;
