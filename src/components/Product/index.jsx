import React, { Component } from "react";

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
    return (
      <div>
        <h1>
          {name} - <small>${price}</small>
        </h1>
        <button onClick={this.buy}>Buy</button>
        <br />
        <h4>{this.state.qty} item(s)</h4>
        <hr />
      </div>
    );
  }
}
