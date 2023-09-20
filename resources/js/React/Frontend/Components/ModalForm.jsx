import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faX
} from '@fortawesome/free-solid-svg-icons';
const ModalForm = ({modalMain, title}) => {


    const handleCloseModal = () => {
        modalMain.current.classList.add('hidden');
    }

  return (
  <>
              <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-30"></div>
                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-xl shadow-lg z-50 overflow-y-auto p-3">

                    <div className="modal-content py-4 text-left px-6">

                    <div className="modal-header mb-4 flex justify-between items-center">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <button id="modal-close" className="modal-close text-gray-600 hover:text-gray-900 focus:outline-none"
                            onClick={handleCloseModal}
                        >
                          <FontAwesomeIcon icon={faX}/>
                        </button>
                    </div>

                    <div className="modal-body mt-5">
                        <div className="mb-5">
                            <label htmlFor="">Nombre:</label>
                            <input type="text"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="">Apellido:</label>
                            <input type="text"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="">Edad:</label>
                            <input type="text"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                        </div>
                    </div>

                    <div className="modal-footer mt-16">
                    <button id="modal-close" className="modal-close w-full px-4 py-2 font-semibold text-white bg-green-700 rounded hover:bg-gray-600 focus:outline-none uppercase">
                        Guardar
                    </button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ModalForm
