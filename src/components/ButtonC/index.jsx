import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

class ButtonC extends Component {
  render() {
    const { classes, title, handleClick, variantProp } = this.props;
    return (
      <div>
        <Button
          size="small"
          variant={variantProp}          
          color="primary"
          className={classes.button}
          onClick={handleClick}
        >
          {title}
        </Button>
      </div>
    );
  }
}

ButtonC.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  variantProp: PropTypes.string
};
ButtonC.defaultProps = {
  title: "Lorem Ipsum",
  variantProp: "contained"
};

export default withStyles(styles)(ButtonC);
