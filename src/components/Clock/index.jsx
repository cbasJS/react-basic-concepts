import React, { Component } from "react";

class Clock extends Component {
  constructor(args) {
    super(args);
    this.state = {
      hour: new Date().toLocaleTimeString()
    };
  }

  componentWillMount() {
    setInterval(() => this.updateHour(), 1000);    
  }

  updateHour = () => this.setState({ hour: new Date().toLocaleTimeString() });

  render() {
    return <div>{this.state.hour}</div>;
  }
}

export default Clock;
