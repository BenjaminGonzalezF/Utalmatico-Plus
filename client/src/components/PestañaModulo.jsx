import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const PestañaModulo = () => {
    const navigate = useNavigate();


  const handlePestañaModulo = () => {
    navigate('/inicio');
  };

  return (
    <>
    <h1>
        <div class="container">
          <div class="botones           bg-red-500   ">  Botones </div>
          <div class="filtros           bg-yellow-500        ">  Filtros </div>
          <div class="Laterales          bg-teal-500       ">  Botones lateriales </div>
          <div class="Interior-ramos     bg-indigo-500       ">  Interior ramos</div>
        </div>
    </h1>
    </>
  )
};

export default PestañaModulo;
