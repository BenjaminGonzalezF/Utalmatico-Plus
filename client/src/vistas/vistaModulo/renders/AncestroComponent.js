
import RenderBotonesUnidades from "./path-to-RenderBotonesUnidades";
import RenderContenidoUnidades from "./path-to-RenderContenidoUnidades";
import { useState } from 'react';

function AncestroComponent() {
  const [clases, setClases] = useState([]);

  return (
    <div>
      <RenderBotonesUnidades setClases={setClases} />
      <RenderContenidoUnidades clases={clases} />
    </div>
  );
}

export default AncestroComponent;