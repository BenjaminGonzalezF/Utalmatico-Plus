import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx' 
import PestañaInicial from './components/PestañaInicial.jsx'
import Horario from './components/Horario.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PestañaModulo from './components/PestañaModulo.jsx'
import Mensajes from './components/Mensajes.jsx'
import GeneracionCartaModulos from './components/GeneracionCartaModulos.jsx'
import VistaModulo from './components/VistaModulo.jsx'
import Calendario from './components/Calendario.jsx'
import BotonesFiltrado from './components/BotonesFiltrado.jsx'


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
  path: '/pestañaModulo', 
  element: <PestañaModulo/>,
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
}

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
