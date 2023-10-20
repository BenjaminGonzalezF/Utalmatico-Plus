import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx' 
import PestañaInicial from './components/pestañaInicial.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PestañaModulo from './components/PestañaModulo.jsx'
import GeneracionCartaModulos from './components/GeneracionCartaModulos.jsx'
import VistaModulo from './components/VistaModulo.jsx'

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
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
