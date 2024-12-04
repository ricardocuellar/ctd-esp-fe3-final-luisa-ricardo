import React, {useState} from "react";
import Contact from "../Routes/Contact";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeUser = (e) => setUser(e.target.value);

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
    <>
      <h1>Información de contacto</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Nombre completo: </label>
        <input type="text" onChange={(e) => setUser({ ...user, nombre: e.target.value })} />

        <label htmlFor="email">Email: </label>
        <input type="text" onChange={(e) => setUser({ ...user, email: e.target.value })} />

        <button type="submit">Enviar</button>
      </form>

      {error ? <p>{errorMessage}</p> : ''}
      {/* {show ? <Contact user={user.nombre} email={user.email} /> : ''} */}
    </>
  );
};

export default Form;
