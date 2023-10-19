import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const PestañaInicial = () => {
    const navigate = useNavigate();


  const handlePestañaInicial = () => {
    navigate('/inicio');
  };

  return (
    <>
    <h1>
        Soy pestaña inicial
    </h1>
    </>
  )
};

export default PestañaInicial;
