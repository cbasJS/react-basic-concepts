import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "./styles";

const InputC = props => {
  const { classes, propLabel, handleChange, propValue } = props;
  return (
    <div>
      <TextField
        id="standard-dense"
        label={propLabel}
        className={classes.dense}
        onChange={handleChange}
        value={propValue}
      />
    </div>
  );
};

InputC.propTypes = {
  classes: PropTypes.object.isRequired,
  propLabel: PropTypes.string,
  propValue: PropTypes.string,
  handleChange: PropTypes.func
};
InputC.defaultProps = {
  propLabel: "Lorem"
};

export default withStyles(styles)(InputC);
