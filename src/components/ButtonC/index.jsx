import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

class ButtonC extends Component {
  render() {
    const { classes, title, handleClick } = this.props;
    return (
      <div>
        <Button
          size="small"
          variant="contained"
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
  handleClick: PropTypes.func
};
ButtonC.defaultProps = {
  title: "Lorem Ipsum"
};

export default withStyles(styles)(ButtonC);
