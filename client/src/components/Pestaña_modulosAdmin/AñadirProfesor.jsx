import React, { useState } from 'react';

const AñadirProfesor = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAccept = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };
                                       
  return (
    <div className="AñadirProfesor-overlay">
      <div className="AñadirProfesor-content">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <div className="search-container">
          <style dangerouslySetInnerHTML={{__html: "\n    .top-100 {top: 100%}\n    .bottom-100 {bottom: 100%}\n    .max-h-select {\n        max-height: 300px;\n    }\n" }} />
          <div className="flex flex-col items-center">
            <div className="w-full md:w100 flex flex-col items-center h-64">
              <div className="w-full px90">
                <div className="flex flex-col items-center relative">
                  <div className="w-full">
                    <div className="my-2 p-2 bg-white flex border border-gray-200 rounded"> 
                      <div className="flex flex-auto flex-wrap" />
                      <input
                        placeholder="Buscar profesor"
                        className="p-2 px100 appearance-none outline-none w-full text-gray-800 text-lg"
                      />
                      <div className="text-gray-300 w-8 py-2 pl-4 pr-2 border-l flex items-center border-gray-200">
                        <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up w-4 h-4">
                            <polyline points="18 15 12 9 6 15" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
                    <div className="flex flex-col w-full">
                    <div className="cursor-pointer w-full border-gray-100 border-b hover-bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover-border-teal-100">
                          <div className="w-6 flex flex-col items-center">
                          <div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full "><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/62.jpg" /> </div>
                          </div>
                          <div className="w-full items-center flex">
                            <div className="mx-2 -mt-1 w-1/2 ">Matias
                              <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">CTO &amp; technical manager</div>
                            </div>
                            <div className="w-1/2 flex">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer w-full border-gray-100 border-b hover-bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover-border-teal-100">
                          <div className="w-6 flex flex-col items-center">
                            <div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full "><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/65.jpg" /> </div>
                          </div>
                          <div className="w-full items-center flex">
                            <div className="mx-2 -mt-1 w-1/2 ">Martina
                              <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">CTO &amp; technical manager</div>
                            </div>
                            <div className="w-1/2 flex">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer w-full border-gray-100 border-b hover-bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover-border-teal-100">
                          <div className="w-6 flex flex-col items-center">
                            <div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full "><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/65.jpg" /> </div>
                          </div>
                          <div className="w-full items-center flex">
                            <div className="mx-2 -mt-1 w-1/2 ">Benjamin
                              <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">CTO &amp; technical manager</div>
                            </div>
                            <div className="w-1/2 flex">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer w-full border-gray-100 rounded-b hover-bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover-border-teal-100">
                          <div className="w-6 flex flex-col items-center">
                            <div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full "><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/85.jpg" /> </div>
                          </div>
                          <div className="w-full items-center flex">
                            <div className="mx-2 -mt-1  ">Antonia
                              <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">CMO &amp; marketing manager</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        <div className="buttons">
          <button
            className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover-bg-black"
            style={{
              fontSize: '16px',
              width: '120px',
              marginTop: '100px'
            }}
          >
            Aceptar
          </button>
          <button
            className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover-bg-black"
            style={{
              fontSize: '16px',
              width: '120px',
              height: '50px',
              marginLeft: '150px',
              marginTop: '-50px',
            }}
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AñadirProfesor;

