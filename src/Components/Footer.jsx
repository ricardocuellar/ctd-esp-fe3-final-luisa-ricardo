import React from 'react'
import logodh from "../assets/logo_dh.jpg"
import { useTheme } from "../Context/ThemeContext";


const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`navbar ${theme}`}>
        <p>Powered by Luisa Vargas & Ricardo Cuéllar</p>
        <img src={logodh} alt='DH-logo' width={20} />
    </footer>
  )
}

export default Footer
