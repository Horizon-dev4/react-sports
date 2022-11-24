import React from 'react';
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h2>Login Here</h2>
        </div>
        <div className="body">
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
          <input type="submit" placeholder="Submit" />

        </div>
        <div className="footer">
          <button>Register</button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default Modal
