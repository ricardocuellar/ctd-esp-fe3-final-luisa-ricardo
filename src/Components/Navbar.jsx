import React, { useEffect } from 'react'

import { Link } from 'react-router-dom';
import { useTheme } from "../Context/ThemeContext";
import logodh from "../assets/logo_dh.jpg"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${theme}`}>
      <div className='logo'>
        <img src={logodh} alt="Logo Digital House" width={50} />
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='menu'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button className='changeThemeButton'  onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
      </div>
      

    </nav>
  )
}

export default Navbar