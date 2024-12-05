import React, { useEffect } from 'react'
import Card from '../Components/Card'
import { Routes } from 'react-router-dom'
import { getDentists } from '../helpers/getDentists'
import useFetchDentists from '../hooks/useFetchDentists'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentists, isLoading} = useFetchDentists();

  return (
    <>
      <h1>Home</h1>

        {
            isLoading && (<h2>Cargando...</h2>)
        }
       <div className='card-grid'>

        {dentists.map((dentist) => (
          <Card name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
        
         {/* Aqui deberias renderizar las cards */}
       </div>
    </>
    // <main className="" >
    //   <h1>Home</h1>
    //   <div className='card-grid'>
    //     {/* Aqui deberias renderizar las cards */}
    //   </div>
    // </main>
  )
}

export default Home