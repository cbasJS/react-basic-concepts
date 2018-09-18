import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import styles from "./styles";

const PaperSheet = props => {
  const { classes, children } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        {children}
      </Paper>
    </div>
  );
};

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
