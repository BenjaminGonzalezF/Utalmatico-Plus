import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Pestaña_login/Login.jsx'
import PestañaInicial from './components/PestañaInicial.jsx'
import Horario from './components/Horario.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AñadirClase from './components/Pestaña_modulos/AñadirClase.jsx'
import AñadirDescargable from './components/Pestaña_modulos/AñadirDescargable.jsx'
import Mensajes from './components/Mensajes.jsx'
import GeneracionCartaModulos from './components/GeneracionCartaModulos.jsx'
import VistaModulo from './components/VistaModulo.jsx'
import Calendario from './components/Calendario.jsx'
import BotonesFiltrado from './components/BotonesFiltrado.jsx'
import Pendientes from './components/Pendientes.jsx'
import AñadirUnidad from './components/Pestaña_modulos/AñadirUnidad.jsx'


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
}

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
