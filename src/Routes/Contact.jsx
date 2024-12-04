import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = ({nombre}) => {
  return (
    <div>
      <Form/>
      {/* <h2>Gracias {nombre}, te contactaremos cuando antes vía mail</h2> */}
    </div>
  )
}

export default Contact