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
        Soy pestaña modulo
    </h1>
    </>
  )
};

export default PestañaModulo;
