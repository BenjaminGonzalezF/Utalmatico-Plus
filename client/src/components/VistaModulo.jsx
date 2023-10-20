import BotonesModulos from './BotonesModulos';
import './CssPestañaModulo.css';


export default function VistaModulo({nombre}) {
  return (
    <>
        <div class="containeruwu">
          <div class="botones           bg-red-500   "><BotonesModulos/> </div>
          <div class="filtros           bg-yellow-500        ">  Filtros </div>
          <div class="Laterales          bg-teal-500       ">  Botones lateriales </div>
          <div class="Interior-ramos     bg-indigo-500       ">  Interior ramos</div>
        </div>
    </>
  );
}

