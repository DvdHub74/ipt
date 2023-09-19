import React, {useRef} from 'react'

const ListRegistros = () => {
    const modalMain = useRef(null);

    const handleCloseModal = () => {
        modalMain.current.classList.add('hidden');
    }

    const handleOpenModal = () => {
        modalMain.current.classList.remove('hidden');
    }
  return (
    <>
        <h1 className='text-7xl text-blue-900 font-bold text-center  p-10'>
            Lista de registros
        </h1>
        <button id="modal-close" class="modal-close px-4 py-2 font-semibold text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
        onClick={handleOpenModal}>
            Abrir Modal
        </button>

        <div id="myModal" class="modal  fixed inset-0 w-full h-full flex items-center justify-center" ref={modalMain}
         style={{ zIndex: 400 }}
        >
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-xl shadow-lg z-50 overflow-y-auto p-3">

                    <div class="modal-content py-4 text-left px-6">

                    <div class="modal-header mb-4 flex justify-between items-center">
                        <h2 class="text-xl font-semibold">Agregar Registro Nuevo</h2>
                        <button id="modal-close" class="modal-close text-gray-600 hover:text-gray-900 focus:outline-none"
                            onClick={handleCloseModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <div class="modal-body mt-5">
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

                    <div class="modal-footer mt-16">
                    <button id="modal-close" class="modal-close w-full px-4 py-2 font-semibold text-white bg-green-700 rounded hover:bg-gray-600 focus:outline-none uppercase">
                        Guardar
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ListRegistros
