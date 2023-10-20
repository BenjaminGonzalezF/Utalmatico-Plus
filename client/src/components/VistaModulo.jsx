import BotonesModulos from './BotonesModulos';
import './CssPestañaModulo.css';


export default function VistaModulo({nombre}) {
  return (
    <>
        <div class="containeruwu bg-indigo-400">
          <div class="botones             "><BotonesModulos/> </div>
          <div class="filtros                  ">  Filtros </div>
          <div class="Laterales                ">  Botones lateriales </div>
          <div class="Interior-ramos           ">  Interior ramos</div>
        </div>
    </>
  );
}

