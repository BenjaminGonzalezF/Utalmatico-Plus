import RenderBotonesUnidades from '../vistas/vistaModulo/RenderBotonesUnidades';
import BotonesModulos from './BotonesModulos';
import './CssPestañaModulo.css';


export default function VistaModulo({nombre}) {
  return (
    <>
        <div class="containeruwu">
          <div class="botones     bg-yellow-500          "><BotonesModulos/> </div>
          <div class="filtros         bg-orange-500         "> <RenderBotonesUnidades/> </div>
          <div class="Laterales       bg-green-500         ">  Botones lateriales </div>
          <div class="Interior-ramos     bg-teal-500      ">  Interior ramos</div>
        </div>
    </>
  );
}

