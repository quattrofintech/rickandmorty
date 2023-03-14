import React from 'react'
import { NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div>
            <img src="https://icon-library.com/images/rick-and-morty-icon/rick-and-morty-icon-4.jpg" alt="" />
        </div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/characters'>Personagens</NavLink>
            <NavLink to='/locations'>Lugares</NavLink>
            <NavLink to='/episodes'>Episódios</NavLink>
        </nav>
    </header>
  )
}

export default Header