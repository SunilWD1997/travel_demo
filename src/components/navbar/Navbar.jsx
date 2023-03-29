import './navbar.css';
import { NavLink } from 'react-router-dom';
import { MenuItems } from '../MenuItems';
import { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const handelMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className="navbar">

      <div className="main_logo">
        <NavLink to='/'>Trippy</NavLink>
      </div>

      <div className="hamburg_menu" onClick={handelMenu}>
        {menu ? <i className='fas fa-bars'></i> : <i className='fas fa-times'></i>}
      </div>

      <ul className='navmenu' style={{left: menu? '': '0'}}>
        {MenuItems.map((item) => {
          return <li key={item.id} className={item.className} onClick={()=>{setMenu(true)}}><NavLink to={item.url}><i className={item.icon}></i>{item.title}</NavLink></li>
        })}
        <button>Sign up</button>
      </ul>

    </div>
  )
}

export default Navbar