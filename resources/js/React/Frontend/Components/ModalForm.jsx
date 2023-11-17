import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import {
    faSave,
} from "@fortawesome/free-solid-svg-icons";

const ModalForm = ({ create, personArray }) => {
    const [names, setNames] = useState('');
    const [lastNames, setLastNames] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if (personArray) {
          const person = personArray;
          setNames(person.names);
          setLastNames(person.lastnames);
          setAge(person.age);
          setId(person.id)
        }
      }, [personArray]);

    const handleSubmit = async () =>{
        const token = localStorage.getItem('token');
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization : `Bearer ${token}`
            }
        }

        if(create){
            try {
                const url = 'api/data/people';

                const data = {
                    names: names,
                    lastnames: lastNames,
                    age: age,
                    active: 1
                  };
                const response = await axios.post(url,JSON.stringify(data), config);
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
        }else{
            try {
                const url = 'api/data/people';

                const data = {
                    id: id,
                    names: names,
                    lastnames: lastNames,
                    age: age,
                    active: 1
                  };
                const response = await axios.put(url,JSON.stringify(data), config);
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
    }
    const inputStyle = {
        background: "none",
        borderBottom: "2px solid #ccc",
        transition: "border-color 0.2s",
        borderTop: "0px",
        borderLeft: "0px",
        borderRight: "0px",
        boxShadow: "none",
        borderRadius: "0px",
    };

    return (
        <>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content ">
                    <div className="modal-header ">
                        <button
                            type="button"
                            className="btn-close r-0"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
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
                            <div className="row mb-5 mt-3">
                                <div className="col-10 my-3 mx-auto">
                                    <input
                                        type="text"
                                        className="form-control ps-3 customControl"
                                        placeholder="Nombre..."
                                        value={names}
                                        onChange={(e) =>
                                            setNames(
                                                e.target.value
                                            )
                                        }
                                        style={inputStyle}
                                        onFocus={(e) => {
                                            e.target.style.borderBottom =
                                                "5px solid #463EB6";
                                            e.target.placeholder = "";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderBottom =
                                                "2px solid #ccc";
                                            e.target.placeholder = "Nombre...";
                                        }}
                                    />
                                </div>
                                <div className="col-10 my-3 mx-auto">
                                    <input
                                        type="text"
                                        className="form-control ps-3 customControl"
                                        placeholder="Apellido..."
                                        value={lastNames}
                                        onChange={(e) =>
                                            setLastNames(
                                                e.target.value
                                            )
                                        }
                                        style={inputStyle}
                                        onFocus={(e) => {
                                            e.target.style.borderBottom =
                                                "5px solid #463EB6";
                                            e.target.placeholder = "";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderBottom =
                                                "2px solid #ccc";
                                            e.target.placeholder =
                                                "Apellido...";
                                        }}
                                    />
                                </div>
                                <div className="col-10 my-3 mx-auto">
                                    <input
                                        type="number"
                                        className="form-control ps-3 customControl"
                                        placeholder="Edad..."
                                         value={age}
                                         onChange={(e) =>
                                            setAge(
                                                e.target.value
                                            )
                                        }
                                        style={inputStyle}
                                        onFocus={(e) => {
                                            e.target.style.borderBottom =
                                                "5px solid #463EB6";
                                            e.target.placeholder = "";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderBottom =
                                                "2px solid #ccc";
                                            e.target.placeholder = "Edad...";
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer px-4">
                            <button
                                type="submit"
                                className="btn btnMenu w-50 mx-auto"
                                style={{
                                    background: "#2F288B",
                                    color: "white",
                                    textTransform: "uppercase",
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
