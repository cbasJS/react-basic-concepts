import React, { Component } from "react";

import Product from "../Product";
import Total from "../Total";
import ProductForm from "../ProductForm";

export default class index extends Component {
  constructor(args) {
    super(args);
    this.state = {
      total: 0,
      productList: [
        { name: "Android", price: 121 },
        { name: "Apple", price: 123 },
        { name: "Nokia", price: 65 }
      ]
    };
  }

  createProduct = product =>
    this.setState({ productList: this.state.productList.concat(product) });
  calculateTotal = price => this.setState({ total: this.state.total + price });
  printProduct = () => {
    return this.state.productList.map((product, i) => (
      <div key={i}>
        <Product          
          name={product.name}
          price={product.price}
          handleTotal={this.calculateTotal}
        />
      </div>
    ));
  };

  render() {
    return (
      <section>
        <div>
          <ProductForm handleCreate={this.createProduct} />
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-around"
          }}
        >          
          {this.printProduct()}
        </div>
        <div>
          <Total total={this.state.total} />
        </div>
      </section>
    );
  }
}
