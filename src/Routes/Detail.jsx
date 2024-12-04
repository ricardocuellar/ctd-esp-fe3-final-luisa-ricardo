import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDentistInfo } from '../helpers/getDentists';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id} = useParams();
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchDentistInfo = async () => {
      setLoading(true);
      try {
        const data = await getDentistInfo(id); 
        setDentist(data); 
      } catch (error) {
        console.error('Error fetching dentist info:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchDentistInfo();
  }, [id]); 

  if (loading) {
    return <p>Cargando...</p>; 
  }


  if (!dentist) {
    return <p>No se encontro dentista.</p>; 
  }


  return (
    <>
    <h1>Perfil del dentista.</h1>
    <p><strong>Nombre:</strong> {dentist.name}</p>
    <p><strong>Email:</strong> {dentist.email}</p>
    <p><strong>Teléfono:</strong> {dentist.phone}</p>
    <p><strong>Sitio web:</strong> {dentist.website}</p>
  </>
  )
}

export default Detail