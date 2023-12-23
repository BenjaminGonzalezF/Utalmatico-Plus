import React, { useContext } from "react";
import userState from "../../../components/userState.js";

export default function BotonUnidad({nombreUnidad}){

    const asignarUnidades = async (nombre) => {
        userState.guardarUnidad = nombre;
        
      };


    const propiedadesBtn = "A"
    return(
        <></>        );

}