import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = ({nombre}) => {
  return (
    <div className='formElementContainer'>
      <Form/>
      
    </div>
  )
}

export default Contact