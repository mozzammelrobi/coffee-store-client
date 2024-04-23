import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar></Navbar>
     <h1 className='text-3xl font-bold'>Coffe client server</h1>
     <Outlet></Outlet>
    </>
  )
}

export default App
