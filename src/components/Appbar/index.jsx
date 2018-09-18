import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


import Clock from "../Clock";

const styles = {
  root: {
    flexGrow: 1
  }
};

const SimpleAppBar = props => {
  const { classes, title } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {title}
            <Clock />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

SimpleAppBar.defaultProps = {
  title: "Forever 21"
};

export default withStyles(styles)(SimpleAppBar);
