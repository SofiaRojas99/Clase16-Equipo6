import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {


  return (
    <nav>
        <Link to='/home'><h3>Inicio</h3></Link>
        <Link to='/contacto'><h3>Contacto</h3></Link>
        <Link to='/beer'><h3>Beer</h3></Link>
    </nav>
  )
}

export default Navbar