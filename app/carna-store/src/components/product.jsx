import React, { Component } from "react";
import Modal from "./modal";

class Product extends Component {
  state = { showModal: false };

  toggleModal = () => {
    const showModal = !this.state.showModal;

    this.setState({ showModal });
  };

  render() {
    if (this.state.showModal) return <Modal />;

    const { product } = this.props.location.state;

    return (
      <section className="product">
        <div className="product-content">
          <img src={product.src} alt="product" className="product-image" />

          <div className="product-info">
            <div className="product-name">Fantasia CarnaStore</div>

            <div className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ultricies mi eget mauris pharetra et ultrices neque. Arcu dui
              vivamus arcu felis bibendum. Fermentum dui faucibus in ornare.
              Faucibus nisl tincidunt eget nullam non nisi est sit amet. Felis
              imperdiet proin fermentum leo.
            </div>

            <div className="product-price">
              Por <strong>R$ {product.price}</strong>
            </div>

            <form action="#s" className="product-form">
              <div className="product-size">
                <div className="product-size-title">Escolha o tamanho</div>
                <div className="product-inputs">
                  {product.sizes.map(item => (
                    <React.Fragment>
                      <input
                        type="radio"
                        id={item}
                        className="product-form-radio"
                        name="size"
                        value={item}
                      />
                      <label for={item} className="product-form-label">
                        {item}
                      </label>
                    </React.Fragment>
                  ))}
                </div>

                <div className="product-form-button">
                  <button className="button" onClick={this.toggleModal}>
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
