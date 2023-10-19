import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx' 
import PestañaInicial from './components/pestañaInicial.jsx'
import Horario from './components/Horario.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PestañaModulo from './components/PestañaModulo.jsx'

const router = createBrowserRouter([
{
  path: '/', 
  element: <Login/>,
},
{
  path: '/inicio', 
  element: <App/>,
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
  path: '/horario', 
  element: <Horario/>,
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
