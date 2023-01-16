import React from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

import './Navbar.scss';
import { CiShoppingCart } from 'react-icons/ci';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <Link to="/">
                <img src={logo} alt="img" />
              </Link>
              <a className="nav ms-4" href="#d">
                Fashi
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              <div onClick={() => setActive(!active)}>
                {active ? (
                  <RxCross2 className="color" />
                ) : (
                  <>
                    <span className="navbar-toggler-top"></span>
                    <span className="navbar-toggler-middle"></span>
                    <span className="navbar-toggler-bottom"></span>
                  </>
                )}
              </div>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li
                  //   className="nav-item"
                  className="nav-item me-3"
                >
                  <a className="nav-link active" aria-current="page" href="#d">
                    Home
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#f">
                    Shop
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#f">
                    Blog
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#f">
                    About
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#f">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <div style={{ position: 'relative' }}>
                  <CiShoppingCart className="card_icon" />
                  <div className="position_ab">0</div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
