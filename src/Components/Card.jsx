import React, { useEffect, useState } from "react";
import imageIcon from "../assets/doctor_image.png"
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const [isFavorite, setIsFavorite] = useState(false);
  const checkIfFavorite = () => {
    const existingFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFav = existingFavs.some((fav) => fav.id === id);
    setIsFavorite(isAlreadyFav);
  };

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const existingFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFav = { id, name, username};

    if(!isFavorite){
      const updateFavs = [...existingFavs, newFav];
      localStorage.setItem("favorites", JSON.stringify(updateFavs));
      setIsFavorite(true);
      console.log("Fav: ", newFav)
    }else{
      alert("Este dentista ya está en tus favoritos.")
    }
  }

  const removeFav = () => {
    const existingFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavs = existingFavs.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    setIsFavorite(false);
    console.log("Eliminado de favoritos:", id);
  }

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFav();
    } else {
      addFav();
    }
  };

  useEffect(() => {
    checkIfFavorite();
  }, []);

 

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
        <button onClick={toggleFavorite} className="favButton">
          {isFavorite ? "❤️" : "🤍"}
        </button>
    </div>
  );
};

export default Card;
