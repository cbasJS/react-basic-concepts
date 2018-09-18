import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import ProductList from "./components/ProductList";
import SimpleAppBar from "./components/Appbar";

class Root extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <SimpleAppBar />
        <ProductList />
      </div>
    );
  }
}

export default Root;
