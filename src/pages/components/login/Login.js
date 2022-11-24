import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./login.css";

function Login() {

  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div className="pv">
      <div className="login-content">
      <h1>Hey, click on the button to Login.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Login;
