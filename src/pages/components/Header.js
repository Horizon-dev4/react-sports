import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal/Modal';

function Header() {

  const [modalOpen, setModalOpen] = useState( false);
  
  return (
    <>
        <header className="header-section">
        <div className="nav-p">
          <nav className="nav-content-wrapper">
            <Link to="/" className="logo-outer">
              <img src="assets/images/Folio.png" />
            </Link>

            <div className="nav-toggle-btn">
              <div className="btn-inner"></div>
            </div>

            <ul className="nav-items-wrapper">
                <li className="nav-item-list">
                  <Link to="/" className="nav-item-link">
                    Matches
                  </Link>
                </li>
                <li className="nav-item-list">
                  <Link to="/Results" className="nav-item-link">
                    Results
                  </Link>
                </li>
                <li className="nav-item-list">
                  <Link to="/News" className="nav-item-link">
                    News
                  </Link>
                </li>
                <li className="nav-item-list">
                  <Link to="/Dashboard" className="nav-item-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item-list">
                  <Link to="/Forum" className="nav-item-link">
                    Forum
                  </Link>
                </li>
                <li className="nav-item-list">
                  <button
                    className="nav-item-link login-btn modal-sign" 
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    Log In
                  </button>
                </li>
              </ul>
          </nav>
        </div>
        { modalOpen && <Modal setOpenModal={setModalOpen}/>}
        </header>

    </>
  )
}

export default Header
