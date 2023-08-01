import React, { useEffect, useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [navbarAtivo, setNavbarAtivo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setNavbarAtivo(!navbarAtivo);
  };

  return (
    <nav className={`nav ${scrolling ? 'affix' : ''}`}>
      <div className="container">
        <div className="logo">
          <a href="/">Your Logotipo</a>
        </div>
        <div
          id="mainListDiv"
          className={`main_list ${navbarAtivo ? 'show_list' : ''}`}
        >
          <ul className="navlinks">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Works</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <span className="navTrigger" onClick={toggleNavbar}>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;