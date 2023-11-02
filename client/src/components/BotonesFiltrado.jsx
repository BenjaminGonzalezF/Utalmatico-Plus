import React, { useState } from 'react';

const BotonesFiltrado = () => {
  const [selectedLanguage1, setSelectedLanguage1] = useState('Opción 1');
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);

  const [selectedLanguage2, setSelectedLanguage2] = useState('Opción 4');
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  
  const [selectedLanguage3, setSelectedLanguage3] = useState('Opción 4');
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);

  const handleLanguageChange1 = (language) => {
    setSelectedLanguage1(language);
    setDropdownOpen1(false);
  };

  const handleLanguageChange2 = (language) => {
    setSelectedLanguage2(language);
    setDropdownOpen2(false);
  };

  const handleLanguageChange3 = (language) => {
    setSelectedLanguage3(language);
    setDropdownOpen3(false);
  };

  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  const toggleDropdown3 = () => {
    setDropdownOpen3(!isDropdownOpen3);
  };

  return (
    <div className="flex-auto flex flex-row items-center" style={{marginTop:'40px',marginLeft:'20px'}}>
      <div className="relative bg-gray-800 p-1 flex border border-gray-800 rounded-md" style={{ marginRight: '40px' }}> {/* Add margin for separation */}
          <div className="flex flex-auto flex-wrap">
            <span className="mr-1 text-white">Ver módulos:</span>
            <span className="text-white">{selectedLanguage1}</span>
          </div>
          <div>
            <button
              onClick={toggleDropdown1}
              className="cursor-pointer w-20 h-8 text-white outline-none focus:outline-none"
            >
            </button>
          </div>

        {isDropdownOpen1 && (
          <div className="absolute top-100 left-0 mt-1 bg-gray-800 border border-gray-800 rounded-md w-52 z-50">
            <div
              className="cursor-pointer border-gray-800 rounded-md border-b hover-bg-teal-100"
              onClick={() => handleLanguageChange1('Opción 1')}
            >
              <div className="leading-6 text-white p-2">Opción 1</div>
            </div>
            <div
              className="cursor-pointer border-gray-800 border-b rounded-md hover-bg-teal-100"
              onClick={() => handleLanguageChange1('Opción 2')}
            >
              <div className="leading-6 text-white p-2">Opción 2</div>
            </div>
            <div
              className="cursor-pointer border-gray-800 rounded-md hover-bg-teal-100"
              onClick={() => handleLanguageChange1('Opción 3')}
            >
              <div className="leading-6 text-white p-2">Opción 3</div>
            </div>
          </div>
        )}
      </div>
      <div className="relative bg-gray-800 p-1 flex border border-gray-800 rounded-md" style={{ marginRight: '40px' }}> {/* Add margin for separation */} 
          <div className="flex flex-auto flex-wrap"> 
            <span className="mr-1 text-white">Ordenar   :  </span>
            <span className="text-white">{selectedLanguage2}</span>
          </div>
          <div>
            <button
              onClick={toggleDropdown2}
              className="cursor-pointer w-20 h-8 text-white outline-none focus:outline-none"
            >
            </button>
          </div>

        {isDropdownOpen2 && (
          <div className="absolute top-100 left-0 mt-1 bg-gray-800 border border-gray-800 rounded-md w-52 z-50">
            <div
              className="cursor-pointer border-gray-800 rounded-md border-b hover-bg-teal-100"
              onClick={() => handleLanguageChange2('Opción 4')}
            >
              <div className="leading-6 text-white p-2">Opción 4</div>
            </div>
            <div
              className="cursor-pointer border-gray-800 border-b rounded-md hover-bg-teal-100"
              onClick={() => handleLanguageChange2('Opción 5')}
            >
              <div className="leading-6 text-white p-2">Opción 5</div>
            </div>
            <div
              className="cursor-pointer border-gray-800 rounded-md hover-bg-teal-100"
              onClick={() => handleLanguageChange2('Opción 6')}
            >
              <div className="leading-6 text-white p-2">Opción 6</div>
            </div>
          </div>
        )}
      </div>
      <div className="relative bg-gray-800 p-1 flex border border-gray-800 rounded-md"> 

          <div className="flex flex-auto flex-wrap">
            <span className="mr-1 text-white">Filtrar   :  </span>
            <span className="text-white">{selectedLanguage3}</span>
          </div>
          <div>
            <button
              onClick={toggleDropdown3}
              className="cursor-pointer w-20 h-8 text-white outline-none focus:outline-none"
            >
            </button>
          </div>

        {isDropdownOpen3 && (
          <div className="absolute top-100 left-0 mt-1 bg-gray-800 border border-gray-800 rounded-md w-52 z-50">
            <div
              className="cursor-pointer border-gray-800 rounded-md border-b hover-bg-teal-100"
              onClick={() => handleLanguageChange3('Opción 4')}
            >
              <div className="leading-6 text-white p-2">Opción 4</div>
            </div>
            <div
              className="cursor-pointer border-gray-800 border-b rounded-md hover-bg-teal-100"
              onClick={() => handleLanguageChange3('Opción 5')}
            >
              <div className="leading-6 text-white p-2">Opción 5</div>
            </div>
            <div
              className="cursor-pointer border-gray-800 rounded-md hover-bg-teal-100"
              onClick={() => handleLanguageChange3('Opción 6')}
            >
              <div className="leading-6 text-white p-2">Opción 6</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BotonesFiltrado;
