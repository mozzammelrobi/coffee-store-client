import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {
  const [coffees , setCoffee] = useState(loadedCoffees)
  const loadedCoffees = useLoaderData()


  return (
    <div>
      <Navbar></Navbar>

      <h1 className='text-6xl text-center font-bold mb-8'>Coffe service : {coffees.length}</h1>
      <h1 className='text-6xl text-center font-bold mb-8'>Coffe service : </h1>

      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard 
            key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffee={setCoffee}
            ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
