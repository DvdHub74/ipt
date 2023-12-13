import React, { useRef, useState, useEffect } from "react";
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

    const [emailLogin, setEmailLogin] = useState("admin@gmail.com");
    const [passwordLogin, setPasswordLogin] = useState("123123123");
    const [ministrie, setMinistrie] = useState("");
    const [ministries, setMinistries] = useState([]);

    useEffect(() => {
        const getMinistries = async () => {
            try {
                const token = localStorage.getItem("token");
                const url = "api/public/ministrie";
                const response = await axios.get(url);

                setMinistries(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getMinistries();
    }, []);

    const inputStyle = {
        background: "none",
        border: "2px solid #ccc",
        transition: "border-color 0.2s",
        borderRadius: "10px",
        height: "35px",
        textAlign: "center",
        fontSize: "18px",
    };

    const handleChangeForm = () => {
        setForm(!form);
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        if ([name, email, password, repeatPassword, ministrie].includes("")) {
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
                ministrie,
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

        if ([emailLogin, passwordLogin].includes("")) {
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
            const response = await axios.post("api/login", { email, password });
            Swal.fire({
                title: "Inicio sesión correctamente!",
                icon: "success",
            });

            localStorage.setItem("token", response.data.access_token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            setTimeout(() => {
                Swal.close();
                navigate("/home/list-registros");
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
            <main className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center vh-100 p-4 p-md-5">
                    {!form && (
                        <div
                            className="col-12 col-xl-3 col-lg-5 col-md-6 col-sm-8 shadow-lg card p-0"
                            style={{ minHeight: "500px" }}
                        >
                            <div className="card-header bg-white text-center">
                                <span className="display-6 text-lila b">
                                    Login
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="container-fluid">
                                    <form onSubmit={handleLogin}>
                                        <div className="row py-5">
                                            <div className="col-12 col-md-9 mx-auto my-3">
                                                <input
                                                    type="email"
                                                    placeholder="Correo"
                                                    className="w-100 form-control"
                                                    style={inputStyle}
                                                    value={emailLogin}
                                                    onChange={(e) =>
                                                        setEmailLogin(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="col-12 col-md-9 mx-auto my-3">
                                                <input
                                                    type="password"
                                                    placeholder="Contraseña"
                                                    className="w-100 form-control"
                                                    style={inputStyle}
                                                    value={passwordLogin}
                                                    onChange={(e) =>
                                                        setPasswordLogin(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="col-10 mx-auto text-center mt-3">
                                                <button
                                                    type="submit"
                                                    className="btn btnLogin rounded-pill px-4"
                                                >
                                                    Iniciar Sesión
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card-footer bg-white text-center">
                                <section className="col-10  mx-auto text-center ">
                                    <button
                                        to="/home"
                                        onClick={handleChangeForm}
                                        className="btn text-lila b"
                                    >
                                        {!form
                                            ? "REGISTRARTE"
                                            : "INICIAR SESION"}
                                    </button>
                                </section>
                            </div>
                        </div>
                    )}
                    {form && (
                        <div
                            className="col-12 col-xl-3 col-lg-6 col-md-8 col-sm-8  shadow-lg card p-0"
                            style={{ minHeight: "500px" }}
                        >
                            <div className="card-header bg-white text-center">
                                <span className="display-6 text-lila b">
                                    Registrarse
                                </span>
                            </div>
                            <div className="card-body p-0">
                                <div className="container-fluid">
                                    <form onSubmit={handleRegister}>
                                        <div className="row py-5">
                                            <div className="col-12 col-md-6 mx-auto my-3">
                                                <input
                                                    type="text"
                                                    placeholder="Nombre"
                                                    className="w-100 form-control"
                                                    style={inputStyle}
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 mx-auto my-3">
                                                <input
                                                    type="email"
                                                    placeholder="Correo"
                                                    className="w-100 form-control"
                                                    style={inputStyle}
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 mx-auto my-3">
                                                <input
                                                    type="password"
                                                    placeholder="Contraseña"
                                                    className="w-100 form-control"
                                                    style={inputStyle}
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 mx-auto my-3">
                                                <input
                                                    type="password"
                                                    placeholder="Repetir contraseña"
                                                    className="w-100 form-control"
                                                    style={inputStyle}
                                                    value={repeatPassword}
                                                    onChange={(e) =>
                                                        setRepeatPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 mx-auto my-3">
                                                <select
                                                    className="mx-auto form-control"
                                                    placeholder="Ministerio..."
                                                    value={ministrie}
                                                    onChange={(e) =>
                                                        setMinistrie(
                                                            e.target.value
                                                        )
                                                    }
                                                    style={inputStyle}
                                                >
                                                    <option
                                                        disabled
                                                        hidden
                                                        value=""
                                                    >
                                                        Ministerio
                                                    </option>
                                                    {ministries &&
                                                        ministries.map(
                                                            (option) => (
                                                                <option
                                                                    key={
                                                                        option.id
                                                                    }
                                                                    value={
                                                                        option.id
                                                                    }
                                                                >
                                                                    {
                                                                        option.name
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                </select>
                                            </div>
                                            <div className="col-10 mx-auto text-center mt-3">
                                                <button
                                                    type="submit"
                                                    className="btn btnLogin rounded-pill px-4"
                                                >
                                                    Registrarse
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card-footer bg-white text-center">
                                <section className="col-10  mx-auto text-center ">
                                    <button
                                        to="/home"
                                        onClick={handleChangeForm}
                                        className="btn text-lila b"
                                    >
                                        {!form
                                            ? "REGISTRARTE"
                                            : "INICIAR SESION"}
                                    </button>
                                </section>
                            </div>
                        </div>
                    )}
                </div>
                {/* <section className="col-10  mx-auto text-center ">
                    <button
                        to="/home"
                        onClick={handleChangeForm}
                        className="btn btn-link text-secondary"
                    >
                        {!form ? "REGISTRARTE" : "INICIAR SESION"}
                    </button>
                </section> */}
            </main>
        </>
    );
};

export default Home;
