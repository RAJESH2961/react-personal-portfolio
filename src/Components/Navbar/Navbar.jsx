import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <img
        src={menu_open}
        alt="Open menu"
        className='nav-mob-open'
        onClick={openMenu}
      />
      <ul ref={menuRef} className='nav-menu'>
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close menu"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#skills'>
            <p onClick={() => setMenu("skills")}>Skills</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#projects'>
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;