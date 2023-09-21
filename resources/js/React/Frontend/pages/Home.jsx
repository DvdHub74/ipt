import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
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
        <div class="container-fluid">
        <div class="row">
            <div class="col">

            </div>

            <div class="col-5 bg-light vh-100  relative shadow">
                <div className="card mx-auto  border-0  w-75 h-50 absolute" style={{
                    top:'25%',
                    background:'none'
                }}>
                        <div class="card-title text-center mt-3">
                        <h3>
                            Iniciar Sesion
                        </h3>
                            </div>

                     <div class="card-body">

                        <div className="row mb-5 mt-3">
                            <div className="col-10 my-3 mx-auto">
                                <input
                                    type="Email"
                                    className="form-control ps-3 customControl text-center"
                                    placeholder="Correo"
                                    style={inputStyle}
                                    onFocus={(e) => {
                                        e.target.style.borderBottom =
                                            "5px solid #463EB6";
                                        e.target.placeholder = "";
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderBottom =
                                            "2px solid #ccc";
                                        e.target.placeholder = "Correo";
                                    }}
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
                                        e.target.placeholder = "";
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderBottom =
                                            "2px solid #ccc";
                                        e.target.placeholder = "Apellido";
                                    }}
                                />
                            </div>
                            <div className="col-10 my-3 mt-5 mx-auto text-center">
                                    <Link to="/home" className='btn btn-outline-success w-100'>ENTRAR</Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Home
