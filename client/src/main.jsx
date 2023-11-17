import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './vistas/Pestaña_login/Login.jsx'
import PestañaInicial from './components/PestañaInicial.jsx'
import Horario from './components/Horario.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AñadirClase from './vistas/vistaModulo/compontes/AñadirClase.jsx'
import AñadirDescargable from './vistas/vistaModulo/compontes/AñadirDescargable.jsx'
import Mensajes from './components/Mensajes.jsx'
import GeneracionCartaModulos from './components/GeneracionCartaModulos.jsx'
import VistaModulo from './vistas/vistaModulo/VistaModulo.jsx'
import Calendario from './components/Calendario.jsx'
import BotonesFiltrado from './components/BotonesFiltrado.jsx'
import Pendientes from './components/Pendientes.jsx'
import Notas from './components/NotasPopup.jsx'
import AñadirUnidad from './vistas/vistaModulo/compontes/AñadirUnidad.jsx'
import AñadirEvaluaciones from './vistas/vistaModulo/compontes/AñadirEvaluaciones.jsx'
import AsignarEvaluacion from './vistas/vistaModulo/compontes/AsignarEvaluacion.jsx'
import GestionarAlumnos from './vistas/Pestaña_admin/GestionarAlumnos.jsx'

const router = createBrowserRouter([
{
  path: '/', 
  element: <Login/>,
},
{
  path: '/inicio', 
  element: <GeneracionCartaModulos/>,
},
{
  path: '/pestañaInicial', 
  element: <PestañaInicial/>,
},
{
  path:'/añadirunidad',
  element: <AñadirUnidad/>
},
{
  path:'/añadirclase',
  element: <AñadirClase/>,
},
{
  path:'/añadirEvaluaciones',
  element: <AñadirEvaluaciones/>,
},

{
  path:'/asignarevaluacion',
  element: <AsignarEvaluacion/>
},

{
  path:'/añadirdescargable',
  element: <AñadirDescargable/>,
},

{
  path: '/modulo', 
  element: <VistaModulo/>,
},
{
  path: '/horario', 
  element: <Horario/>,
},
{
  path: '/mensajes', 
  element: <Mensajes/>,
},
{
  path: '/calendario', 
  element: <Calendario/>,
},
{
  path: '/botonesFiltrado', 
  element: <BotonesFiltrado/>,
},
{
  path: '/pendientes', 
  element: <Pendientes/>,
},
{
  path: '/GestionarAlumnos', 
  element: <GestionarAlumnos/>,
},


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
