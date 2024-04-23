import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffe from './components/AddCoffe.jsx'
import UpdateCoffe from './components/UpdateCoffe.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => fetch('http://localhost:5000/coffee'),
    element: <App></App>,

  },
  {
    path: '/addCoffe',
    element: <AddCoffe></AddCoffe>
  },
  {
    path: '/updateCoffe/:id',
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
    element: <UpdateCoffe></UpdateCoffe>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
