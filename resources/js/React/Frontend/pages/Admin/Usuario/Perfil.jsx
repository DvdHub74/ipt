import React, { useRef, useState } from "react";
import { useEffect } from "react";

const Perfil = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUserData(user);
    }, []);

    return (
        <>
            <div className="row d-flex justify-content-center py-5" style={{marginTop: '10rem'}}>
                <div className="col-5">
                    <div className="container mt-5">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-white">
                                <h3 className="card-title text-center mb-0">
                                    Perfil
                                </h3>
                            </div>
                            <div className="card-body py-4">
                                {userData &&
                                Object.keys(userData).length > 0 ? (
                                    <div>
                                        <p className="card-text text-center">
                                            <strong>Nombre:</strong>{" "}
                                            {userData.name}
                                        </p>
                                        <p className="card-text text-center">
                                            <strong>Email:</strong>{" "}
                                            {userData.email}
                                        </p>
                                        <p className="card-text text-center">
                                            <strong>Fecha de ingreso:</strong>{" "}
                                            {userData.created_at}
                                        </p>
                                        {/* Otros datos del usuario */}
                                    </div>
                                ) : (
                                    <p className="text-center">
                                        Cargando perfil...
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Perfil;
