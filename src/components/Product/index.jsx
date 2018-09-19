import React, { Component } from "react";

import CardC from "../CardC";

export default class Product extends Component {
  constructor(args) {
    super(args);
    this.state = {
      qty: 0
    };
  }

  buy = () => {
    this.setState({ qty: this.state.qty + 1 });
    this.props.handleTotal(this.props.price);
  };

  render() {
    const { name, price } = this.props;
    const { qty } = this.state;
    return (
      <div>
        <CardC
          title={name}
          titleB="Buy"
          funcB={this.buy}
          price={price}
          items={qty}
        />
      </div>
    );
  }
}
