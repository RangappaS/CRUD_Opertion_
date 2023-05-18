import React from 'react'
import css from './menu.module.css'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div id={css.nav}>
      <Link to='/a'>Create-Employe</Link>
      <Link to='/b'>Employe-details</Link>
    </div>

    
  )
}

export default Menu
