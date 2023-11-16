import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MensajesAdmin from './MensajesAdmin';
import AñadirAlumno from './añadirAlumno';
import EliminarAlumno from './EliminarAlumno';
import AñadirProfesor from './AñadirProfesor';
import EliminarProfesor from './EliminarProfesor';
import './AñadirAlumno.css';
import './EliminarAlumno.css';
import './AñadirProfesor.css'
import './EliminarProfesor.css';




export default function BotonesAdmin() {
  const navigate = useNavigate();

  const [selectedLanguage1, setSelectedLanguage1] = useState('Opción 1');
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleLanguageChange1 = (language) => {
    setSelectedLanguage1(language);
    setDropdownOpen1(false);
  };

  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };


  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isModalOpenEliminar, setIsModalOpenEliminar] = useState(false);
  const [isModalOpenAñadirProfesor, setIsModalOpenAñadirProfesor] = useState(false);
  const [isModalOpenEliminarProfesor, setIsModalOpenEliminarProfesor] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalEliminar = () => {
    setIsModalOpenEliminar(true);
  };

  const closeModalEliminar = () => {
    setIsModalOpenEliminar(false);
  };

  const openModalAñadirProfe = () => {
    setIsModalOpenAñadirProfesor(true);
  };
  
  const closeModalAñadirProfe = () => {
    setIsModalOpenAñadirProfesor(false);
  };
  

  const openModalEliminarProfessor = () => {
    setIsModalOpenEliminar(true);
  };

  const closeModalEliminarProfesor = () => {
    setIsModalOpenEliminar(false);
  };


  return (
    <>

        <div className="flex">
          <button
            className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
              fontSize: '2vh',
              width: '10vw',
              height: '10vh',
              marginRight: '0.5vw',
              marginLeft: '0.5vw',
            }}
          >
            Modificar módulos
          </button>
          <button
            onClick={openModal} 
            className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
              fontSize: '2vh',
              width: '10vw',
              height: '10vh',
              marginRight: '0.5vw',
              marginLeft: '0.5vw',
            }}
          >
            Añadir alumno
          </button>
          <button
            className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            onClick={openModalEliminar}
            style={{
              fontSize: '2vh',
              width: '10vw',
              height: '10vh',
              marginRight: '0.5vw',
              marginLeft: '0.5vw',
            }}
          >
            Eliminar alumno
          </button>
          <button
            className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            onClick={openModalAñadirProfe}
            style={{
              fontSize: '2vh',
              width: '10vw',
              height: '10vh',
              marginRight: '0.5vw',
              marginLeft: '0.5vw',
            }}
          >
            Añadir profesor
          </button>
          <button
            className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            onClick={openModalEliminarProfessor}
            style={{
              fontSize: '2vh',
              width: '10vw',
              height: '10vh',
              marginRight: '0.5vw',
              marginLeft: '0.5vw',
            }}
          >
            Eliminar profesor
          </button>
          <button
            
          className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
          onClick={() => setShowChat(true)}
          style={{
            fontSize: '2vh',
            width: '10vw',
            height: '10vh',
            marginRight: '0.5vw',
            marginLeft: '0.5vw',
          }}
          >
            Mensaje directo
          </button>
        </div>
        <div className="flex-auto flex flex-row items-center" style={{ marginTop: '75px', marginRight: '200px' }}>
            <div className="relative bg-gray-800 p-1 flex border border-gray-800 rounded-md" style={{ marginLeft: '760px' }}>
                <div className="flex flex-auto flex-wrap">
                <span className="mr-1 text-white">Semestres:</span>
                <span className="text-white">{selectedLanguage1}</span>
                </div>
                <div>
                <button
                    onClick={toggleDropdown1}
                    className="cursor-pointer w-20 h-8 text-white outline-none focus:outline-none"
                >
                
                </button>

                {showChat && <MensajesAdmin onClose={() => setShowChat(false)} />}
                </div>

                {isDropdownOpen1 && (
                <div className="absolute top-0 right-0 mt-1 bg-gray-800 border border-gray-800 rounded-md w-52 z-50">
                    <div
                    className="cursor-pointer border-gray-800 rounded-md border-b hover-bg-teal-100"
                    onClick={() => handleLanguageChange1('Semestre 1')}
                    >
                    <div className="leading-6 text-white p-2">Semestre 1</div>
                    </div>
                    <div
                    className="cursor-pointer border-gray-800 border-b rounded-md hover-bg-teal-100"
                    onClick={() => handleLanguageChange1('Opción 2')}
                    >
                    <div className="leading-6 text-white p-2">Semestre 2</div>
                    </div>
                    <div
                    className="cursor-pointer border-gray-800 rounded-md hover-bg-teal-100"
                    onClick={() => handleLanguageChange1('Opción 3')}
                    >
                    <div className="leading-6 text-white p-2">Semestre 3</div>
                    </div>
                </div>
                )}
            </div>

      </div>
      <AñadirAlumno isOpen={isModalOpen} onClose={closeModal} />
      <EliminarAlumno isOpen={isModalOpenEliminar} onClose={closeModalEliminar} />
      <AñadirProfesor isOpen={isModalOpenAñadirProfesor} onClose={closeModalAñadirProfe} />
      <EliminarProfesor isOpen={isModalOpenEliminarProfesor} onClose={closeModalEliminarProfesor} />
    </>
  );
}
