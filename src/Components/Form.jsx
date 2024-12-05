import React, {useState} from "react";
import Message from "./Message";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    const regexString= /[a-zA-ZáÁ]$/;
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(user.nombre.trim().length <= 5){
        setError(true);
        setErrorMessage("Por favor verifique su información nuevamente")
    }
    else if(!regexString.test(user.nombre)){
      setError(true);
      setErrorMessage("Por favor verifique su información nuevamente")
    }
    else if(!validEmail.test(user.email)){
      setError(true);
      setErrorMessage("Por favor verifique su información nuevamente")
    }
    else{
        setShow(true);
        setError(false);
    }
}

  console.log(user);

  return (
    <div>

      {show ? ( <Message user={user.nombre}/>) : (
      
        <form onSubmit={handleSubmit}>
          <span>Información de contacto</span>
          <label htmlFor="user">Nombre completo: </label>
          <input type="text" onChange={(e) => setUser({ ...user, nombre: e.target.value })} />

          <label htmlFor="email">Email: </label>
          <input type="text" onChange={(e) => setUser({ ...user, email: e.target.value })} />

          <button type="submit">Enviar</button>

          {error ? ( <h4 style={{ color: "red" }}>  {errorMessage} </h4>) : 'null'}
        </form>
      )}
    </div>
  );
};

export default Form;
