import React, { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Home = () => {
    const [form, setForm] = useState(false);

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");


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

    const handleChangeForm = () => {
        setForm(!form);
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        if ([name, email, password, repeatPassword].includes("")) {
            Swal.fire({
                title: "Error al llenar el formulario",
                text: "Todos los campos son requeridos",
                icon: "error",
                cancelButtonText: "Cerrar",
                showCancelButton: true,
                showConfirmButton: false,
            });
            setTimeout(() => {
                Swal.close();
            }, 2000);
            return;
        }
        if (password != repeatPassword) {
            Swal.fire({
                title: "Las contraseñas tienen que ser iguales",
                icon: "error",
                cancelButtonText: "Cerrar",
                showCancelButton: true,
                showConfirmButton: false,
            });
            setTimeout(() => {
                Swal.close();
            }, 2000);

            return;
        }
        if (password.length < 8) {
            Swal.fire({
                title: "La contraseña necesita ser de 8 caracteres como mínimo",
                icon: "error",
                cancelButtonText: "Cerrar",
                showCancelButton: true,
                showConfirmButton: false,
            });
            setTimeout(() => {
                Swal.close();
            }, 2000);

            return;
        }
        try {
            const { data } = await axios.post("api/register", {
                name,
                email,
                password,
            });

            Swal.fire({
                title: "¡Registrado Correctamente!",
                icon: "success",
            });

            setTimeout(() => {
                Swal.close();
                setForm(!form);
            }, 1500);
        } catch (error) {
            console.log(error);
        }
    };
    const handleLogin = async (e) => {
        e.preventDefault();

        if([emailLogin, passwordLogin].includes('')){
            Swal.fire({
                title: "Error al llenar el formulario",
                text: "Todos los campos son requeridos",
                icon: "error",
                cancelButtonText: "Cerrar",
                showCancelButton: true,
                showConfirmButton: false,
            });
            setTimeout(() => {
                Swal.close();
            }, 2000);
            return;
        }

        try {

            const email = emailLogin;
            const password = passwordLogin;
            const datos = await axios.post('api/login',{email, password});
            Swal.fire({
                title: "Inicio sesión correctamente!",
                icon: "success",
            });

            localStorage.setItem('token',datos.data.access_token)

            setTimeout(() => {
                Swal.close();
                navigate('/home');
            }, 1000);

        } catch (error) {
            Swal.fire({
                title: "¡Hubo un error!",
                icon: "error",
            });
        }
    };
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col"></div>

                    <div class="col-lg-6 col-xl-5 col-md-7 col-12 containerLogin bg-light vh-100  relative shadow">
                        <main
                            className="card cardLogin  mx-auto w-75 border-0 h-50 absolute"
                            style={{
                                top: "25%",
                                background: "none",
                            }}
                        >
                            {!form && (
                                <div className="containLogin">
                                    <div class="card-title text-center mt-3">
                                        <h3
                                            style={{
                                                textTransform: "uppercase",
                                            }}
                                            className="titlePage fs-1"
                                        >
                                            Iniciar Sesion
                                        </h3>
                                    </div>

                                    <section class="card-body">
                                        <form  onSubmit={handleLogin}>
                                            <div className="row mb-4 mt-3">
                                                <div className="col-10 my-3 mx-auto">
                                                    <input
                                                        type="Email"
                                                        className="form-control ps-3 customControl text-center"
                                                        placeholder="Correo"
                                                        style={inputStyle}
                                                        onFocus={(e) => {
                                                            e.target.style.borderBottom =
                                                                "5px solid #463EB6";
                                                            e.target.placeholder =
                                                                "";
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderBottom =
                                                                "2px solid #ccc";
                                                            e.target.placeholder =
                                                                "Correo";
                                                        }}
                                                        value={emailLogin}
                                                        onChange={e=> setEmailLogin(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-10 my-3 mx-auto">
                                                    <input
                                                        type="password"
                                                        className="form-control ps-3 customControl text-center"
                                                        placeholder="Contraseña"
                                                        style={inputStyle}
                                                        onFocus={(e) => {
                                                            e.target.style.borderBottom =
                                                                "5px solid #463EB6";
                                                            e.target.placeholder =
                                                                "";
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderBottom =
                                                                "2px solid #ccc";
                                                            e.target.placeholder =
                                                                "Apellido";
                                                        }}

                                                        value={passwordLogin}
                                                        onChange={e=> setPasswordLogin(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-10 mt-5 mx-auto text-center ">
                                                    <button
                                                        type="submit"
                                                        className="btn btnLogin w-100"
                                                        style={{
                                                            background:
                                                                "#2F288B",
                                                            color: "white",
                                                        }}
                                                    >
                                                        ENTRAR
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </section>
                                </div>
                            )}
                            {form && (
                                <div className="containRegister">
                                    <div class="card-title text-center mt-3">
                                        <h3
                                            style={{
                                                textTransform: "uppercase",
                                            }}
                                            className="titlePage fs-1"
                                        >
                                            Registrarse
                                        </h3>
                                    </div>

                                    <section class="card-body">
                                        <div className="row mb-3 mt-3">
                                            <form onSubmit={handleRegister}>
                                                <div className="col-10 my-3 mx-auto">
                                                    <input
                                                        type="text"
                                                        className="form-control ps-3 customControl text-center"
                                                        placeholder="Nombre"
                                                        style={inputStyle}
                                                        onFocus={(e) => {
                                                            e.target.style.borderBottom =
                                                                "5px solid #463EB6";
                                                            e.target.placeholder =
                                                                "";
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderBottom =
                                                                "2px solid #ccc";
                                                            e.target.placeholder =
                                                                "Nombre";
                                                        }}
                                                        value={name}
                                                        onChange={(e) =>
                                                            setName(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="col-10 my-3 mx-auto">
                                                    <input
                                                        type="Email"
                                                        className="form-control ps-3 customControl text-center"
                                                        placeholder="Correo"
                                                        style={inputStyle}
                                                        onFocus={(e) => {
                                                            e.target.style.borderBottom =
                                                                "5px solid #463EB6";
                                                            e.target.placeholder =
                                                                "";
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderBottom =
                                                                "2px solid #ccc";
                                                            e.target.placeholder =
                                                                "Correo";
                                                        }}
                                                        value={email}
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="col-10 my-3 mx-auto">
                                                    <input
                                                        type="password"
                                                        className="form-control ps-3 customControl text-center"
                                                        placeholder="Contraseña"
                                                        style={inputStyle}
                                                        onFocus={(e) => {
                                                            e.target.style.borderBottom =
                                                                "5px solid #463EB6";
                                                            e.target.placeholder =
                                                                "";
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderBottom =
                                                                "2px solid #ccc";
                                                            e.target.placeholder =
                                                                "Contraseña";
                                                        }}
                                                        value={password}
                                                        onChange={(e) =>
                                                            setPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="col-10 my-3 mx-auto">
                                                    <input
                                                        type="password"
                                                        className="form-control ps-3 customControl text-center"
                                                        placeholder="Repetir Contraseña"
                                                        style={inputStyle}
                                                        onFocus={(e) => {
                                                            e.target.style.borderBottom =
                                                                "5px solid #463EB6";
                                                            e.target.placeholder =
                                                                "";
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderBottom =
                                                                "2px solid #ccc";
                                                            e.target.placeholder =
                                                                "Repetir Contraseña";
                                                        }}
                                                        value={repeatPassword}
                                                        onChange={(e) =>
                                                            setRepeatPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="col-10 my-3 mt-5 mx-auto text-center ">
                                                    <button
                                                        type="submit"
                                                        className="btn btnLogin w-100"
                                                        style={{
                                                            background:
                                                                "#2F288B",
                                                            color: "white",
                                                        }}
                                                    >
                                                        REGISTRARTE
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </section>
                                </div>
                            )}

                            <section className="col-10  mx-auto text-center ">
                                <button
                                    to="/home"
                                    onClick={handleChangeForm}
                                    className="btn btn-link text-secondary"
                                >
                                    {!form ? "REGISTRARTE" : "INICIAR SESION"}
                                </button>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
