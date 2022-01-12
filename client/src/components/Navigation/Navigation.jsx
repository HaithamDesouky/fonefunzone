import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const navBarClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <h1 className="navbar-logo">FoneFunZone</h1>
        </Link>
        <div>
          {(isClicked && (
            <CloseIcon
              style={{ color: 'black' }}
              onClick={navBarClick}
              className="nav-toggle"
            />
          )) || (
            <MenuIcon
              style={{ color: '$tertiary-gold-color' }}
              onClick={navBarClick}
              className="nav-toggle"
            />
          )}

          <ul className={`${isClicked ? 'nav-menu active' : 'nav-menu'}`}>
            <li class="nav-item">
              <Link class="nav-link" to="/" onClick={navBarClick}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/phone/create" onClick={navBarClick}>
                Add Phone{' '}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/phone/list" onClick={navBarClick}>
                Our Phones
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
