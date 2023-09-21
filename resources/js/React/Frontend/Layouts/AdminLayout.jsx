import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faBarsStaggered,
faHome,
faNewspaper,
faCoins,
faX,
faTimes,
faList, faChartBar, faGlobe,
faHeartCircleCheck,
faUser,
faCaretLeft,
faFilePdf,
faAnglesLeft,
faArrowAltCircleLeft,
faGear,
faGears} from '@fortawesome/free-solid-svg-icons';
import myImage from '../../../../../public/images/logo.png'
import '../../../../css/app.css'

const AdminLayout = () => {
    const linkStyle = {
        display: 'block',
        background: '#2F288B',
        color: 'white',
        textDecoration: 'none',
        padding: '10px',
        borderRadius: '5px',
        margin: '5px 0',
        marginTop: '25px',
        fontSize: '18px',
        transition: 'background 0.3s',
      };

      const hoverStyle = {
        background: '#463EB6',
      };

  return (
    <>
    <div className='container-fluid p-0 m-0'>
        <div className='bg-light shadow-sm pt-3  pb-3 vw-100 d-flex justify-content-between align-items-center px-3'>
            <button
                className="btn btnMenu"
                style={{ background: '#2F288B', color: 'white' }}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop"

            >
                <FontAwesomeIcon icon={faBarsStaggered} />
                {''} Menu

            </button>
            <div className='me-2'>
                <Link to="/" className="btn btn-danger" style={{borderRadius:'50px'}}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    {''} Salir
                </Link>
            </div>
        </div>
        <div className="offcanvas offcanvas-start vh-100 " data-bs-show="true" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <span className='h1 iconClose text-end ms-auto m-0 mt-4 me-3' style={{color:'#2F288B', cursor:'pointer'}} data-bs-dismiss="offcanvas" aria-label="Close">
                    <FontAwesomeIcon icon={faAnglesLeft} />
                </span>
            <div className="offcanvas-header">
                <img className='img-fluid mx-auto d-block' width={75} height={100} src={myImage} alt="Tu imagen" />

            </div>
            <div className="offcanvas-body pt-2">
                <Link
                to="/home"
                className="d-flex align-items-center"
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.background = hoverStyle.background}
                onMouseLeave={(e) => e.target.style.background = linkStyle.background}
                >
                <FontAwesomeIcon icon={faHome} className="me-2" />
                <span className='h6'>Inicio</span>
                </Link>

                <Link
                to="/home/list-registros"
                className="d-flex align-items-center"
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.background = hoverStyle.background}
                onMouseLeave={(e) => e.target.style.background = linkStyle.background}
                >
                <FontAwesomeIcon icon={faList} className="me-2" />
                <span className='h6'>Registros</span>
                </Link>

                <Link
                to="/home/list-finanzas"
                className="d-flex align-items-center"
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.background = hoverStyle.background}
                onMouseLeave={(e) => e.target.style.background = linkStyle.background}
                >
                <FontAwesomeIcon icon={faChartBar} className="me-2" />
                <span className='h6'>Finanzas</span>
                </Link>

                <Link
                to="/home/list-campos"
                className="d-flex align-items-center"
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.background = hoverStyle.background}
                onMouseLeave={(e) => e.target.style.background = linkStyle.background}
                >
                <FontAwesomeIcon icon={faGlobe} className="me-2" />
                <span className='h6'>Campos</span>
                </Link>
                <Link
                to="/home/reportes"
                className="d-flex align-items-center"
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.background = hoverStyle.background}
                onMouseLeave={(e) => e.target.style.background = linkStyle.background}
                >
                <FontAwesomeIcon icon={faFilePdf} className="me-2" />
                <span className='h6'>Reportes</span>
                </Link>
                <Link
                to="/home/perfil"
                className="d-flex align-items-center"
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.background = hoverStyle.background}
                onMouseLeave={(e) => e.target.style.background = linkStyle.background}
                >
                <FontAwesomeIcon icon={faUser} className="me-2" />
                <span className='h6'>Perfil</span>
                </Link>
            </div>

        </div>

        <main className='p-0 m-0  vw-100 mainContain'>
            <Outlet/>
        </main>
    </div>

    </>
  )
}

export default AdminLayout




