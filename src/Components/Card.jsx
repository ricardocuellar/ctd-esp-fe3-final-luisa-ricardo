import React from "react";
import imageIcon from "../assets/doctor_image.png"
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const existingFavs = JSON.parse(localStorage.getItem("favorites")) || [];

    const isAlreadyFav = existingFavs.some(fav => fav.id === id);

    if(!isAlreadyFav){
      const newFav = { id, name, username};
      const updateFavs = [...existingFavs, newFav];
      localStorage.setItem("favorites", JSON.stringify(updateFavs));
      console.log("Fav: ", newFav)
    }else{
      alert("Este dentista ya está en tus favoritos.")
    }

    console.log("Add fav")
  }

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src={imageIcon} alt="" width={100}/>
        <h3>{name}</h3>
        <h6>{username}</h6>
      </Link>
        <button onClick={addFav} className="favButton">❤️</button>
    </div>
  );
};

export default Card;
