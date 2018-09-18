import React, { Component } from "react";

class ProductForm extends Component {
  submit = e => {
    e.preventDefault();
    const product = {
      name: this.refs.name.value,
      price: Number.parseInt(this.refs.price.value, 10)
    };
    this.props.handleCreate(product);
    this.refs.name.value = "";
    this.refs.price.value = "";
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="text" placeholder="Product Name" ref="name" />
          <input type="text" placeholder="Product Price" ref="price" />
          <br />
          <br />
          <button>Create Product</button>
        </form>
        <br />
        <hr />
      </div>
    );
  }
}

export default ProductForm;
