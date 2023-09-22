import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faSave,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

const ModalForm = ({title}) => {

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
                            {title}

                        </h3>
                        <div className="row mb-5 mt-3">
                            <div className="col-10 my-3 mx-auto">
                                <input
                                    type="text"
                                    className="form-control ps-3 customControl"
                                    placeholder="Nombre..."
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
                                    style={inputStyle}
                                    onFocus={(e) => {
                                        e.target.style.borderBottom =
                                            "5px solid #463EB6";
                                        e.target.placeholder = "";
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderBottom =
                                            "2px solid #ccc";
                                        e.target.placeholder = "Apellido...";
                                    }}
                                />
                            </div>
                            <div className="col-10 my-3 mx-auto">
                                <input
                                    type="text"
                                    className="form-control ps-3 customControl"
                                    placeholder="Edad..."
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
                    </div>
                    <div className="modal-footer px-4">
                        <button
                            type="button"
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
                </div>
            </div>
        </>
    );
};

export default ModalForm;
