import React from "react";
import whiteLogo from "../mock-server/images/white-logo.svg";
import cards from "../mock-server/images/cards.svg";
import securityIcon from "../mock-server/images/security-icon.svg";

const Footer = () => {
  return (
    <footer>
      <section className="footbox">
        <div className="container footbox-container">
          <img src={whiteLogo} alt="white-logo" className="footbox-logo" />

          <a href="mailto:contato@carnastore.com" className="footbox-email">
            contato@carnastore.com
          </a>
        </div>
      </section>

      <section className="payment">
        <div className="container payment-container">
          <img src={cards} alt="cards" className="payment-cards" />
          <img src={securityIcon} alt="cards" className="payment-security" />
        </div>
      </section>

      <section className="copyright">
        Desenvolvido pela{" "}
        <strong>
          <a
            href="https://humanoide.co/"
            target="_blanck"
            className="copyright-name"
          >
            {" "}
            Humanoide
          </a>
        </strong>
      </section>
    </footer>
  );
};

export default Footer;
