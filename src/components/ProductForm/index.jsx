import React, { Component } from "react";

import ButtonC from "../ButtonC";
import PaperSheet from "../PaperSheet";
import InputC from "../InputC";

class ProductForm extends Component {
  constructor(args) {
    super(args);
    this.state = {
      name: "",
      price: ""
    };
  }

  setName = event => {
    this.setState({
      name: event.target.value
    });
  };

  setPrice = event => {
    this.setState({
      price: event.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    const product = {
      name: this.state.name,
      price: Number.parseInt(this.state.price, 10)
    };
    this.props.handleCreate(product);
    this.setState({
      name: "",
      price: ""
    });
  };
  render() {
    return (
      <div>
        <PaperSheet
          children={
            <form>
              <InputC
                propLabel="Product Name"
                handleChange={this.setName}
                propValue={this.state.name}
              />
              <InputC
                propLabel="Product Price"
                handleChange={this.setPrice}
                propValue={this.state.price}
              />
              <ButtonC title="Agregar" handleClick={this.submit} />
            </form>
          }
        />
      </div>
    );
  }
}

export default ProductForm;
