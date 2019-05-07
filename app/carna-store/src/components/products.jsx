import React, { Component } from "react";
import { Link } from "react-router-dom";
import fantasia1 from "../mock-server/images/fantasia-01.png";
import fantasia2 from "../mock-server/images/fantasia-02.png";
import fantasia3 from "../mock-server/images/fantasia-03.png";

class Products extends Component {
  state = {
    fantasias: [
      {
        id: 1,
        src: fantasia1,
        price: 200,
        descount: 100,
        sizes: ["P", "M", "G"]
      },
      { id: 2, src: fantasia2, price: 120, sizes: ["P", "M"] },
      { id: 3, src: fantasia3, price: 200, sizes: ["P", "G"] }
    ]
  };

  renderPrice = item => {
    if (item.descount) {
      return (
        <div>
          De <span className="item-price-dashed">R$ {item.price}</span> por{" "}
          <span className="item-price-color-orange">
            <strong>&nbsp;R$ {item.descount}</strong>
          </span>
        </div>
      );
    }
    return (
      <div>
        Por{" "}
        <span className="item-price-color-orange">
          <strong>R$ {item.price}</strong>
        </span>
      </div>
    );
  };

  render() {
    const { fantasias } = this.state;
    return (
      <section className="products">
        <div className="products-title">Outras fantasias que vc vai gostar</div>

        <div className="container products-container">
          {fantasias.map(fantasia => (
            <div id={fantasia.id} className="item">
              <img src={fantasia.src} alt="fantasia" className="item-image" />
              <div className="item-price">
                {this.renderPrice(fantasia)}
                <Link
                  className="button item-button"
                  to={{
                    pathname: `/product/${fantasia.id}`,
                    state: { product: fantasia }
                  }}
                >
                  Mais detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Products;
