import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favorites, setFavorites] = useState(null); 
  const [loading, setLoading] = useState(true);

  const loadFavorites = () => {
    setLoading(true); // Activamos el estado de carga
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites); // Actualizamos el estado con los favoritos
    setLoading(false); // Desactivamos el estado de carga
  };

  const cleanFav = () => {
    //Eliminar a todos los favoritos
    localStorage.clear();
    loadFavorites();
  }

  useEffect(() => {
    loadFavorites();

  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <button onClick={cleanFav}>Eliminar todos favoritos 🗑️</button>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {loading ? ( // Si está cargando, mostramos la leyenda de carga
          <p>Cargando...</p>
        ) : favorites && favorites.length > 0 ? ( // Si hay favoritos, los mostramos
          favorites.map((favorite) => (
            <Card
              key={favorite.id} // Agregamos una key única
              name={favorite.name}
              username={favorite.username}
              id={favorite.id}
            />
          ))
        ) : ( // Si no hay favoritos, mostramos un mensaje
          <p>No hay favoritos guardados.</p>
        )}

      </div>
    </>
  );
};

export default Favs;
