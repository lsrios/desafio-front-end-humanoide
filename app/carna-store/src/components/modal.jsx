import React from "react";
import { Link } from "react-router-dom";
import confetti from "../mock-server/images/confetti.svg";

const Modal = () => {
  return (
    <div>
      <div className="overlay" />
      <div className="modal-content">
        <img src={confetti} alt="confetti" />

        <div className="modal-title">VIVAAAA!</div>

        <div className="modal-description">
          Adicionamos o item
          <br />
          no seu carrinho!
        </div>
        <div className="modal-buttons">
          <Link className="button button-outline" to="/view">
            Continuar comprando
          </Link>
          <span> </span>
          <button className="button">Ir para o carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
