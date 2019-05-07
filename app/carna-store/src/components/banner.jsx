import React from "react";

const Banner = () => {
  return (
    <section class="banner">
      <div class="banner-content">
        <div class="banner-title">
          Ainda dá tempo de <strong>ser felix</strong>
        </div>

        <div class="banner-sub-title">
          Fantasias premiun por{" "}
          <span class="banner-price banner-price-color-orange">
            <strong>$100,00</strong>
          </span>
        </div>

        <div class="banner-button">
          <a href="#s" class="button">
            Comprar agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
