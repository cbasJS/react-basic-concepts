import React, { Component } from "react";

import ButtonC from "../ButtonC";

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
        <h1>
          {name} - <small>${price}</small>
        </h1>
        <ButtonC title="buy" handleClick={this.buy} />
        <br />
        <h4>{qty} item(s)</h4>
        <hr />
      </div>
    );
  }
}
