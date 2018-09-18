import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import PaperSheet from "./components/PaperSheet";
import ProductList from "./components/ProductList";
import SearchAppBar from "./components/SearchAppBar";

import "typeface-roboto";

class Root extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <SearchAppBar />
        <PaperSheet children={<ProductList />} />
      </div>
    );
  }
}

export default Root;
