import React from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

import Styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import Clock from "../Clock";
import { IconButton } from "@material-ui/core";

const SearchAppBar = props => {
  const { classes, title } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.iBuTi}>
            <IconButton className={classes.menuButton}>
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <Typography
              className={classes.title}
              variant="title"
              color="inherit"
              noWrap
            >
              {title}
            </Typography>
          </div>
          <div className={classes.iBuTi}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                placeholder="Search..."
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <div className={classes.clock}>
              <Typography
                className={classes.title}
                variant="subheading"
                color="inherit"
                noWrap
              >
                <Clock />
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

SearchAppBar.defaultProps = {
  title: "Forever 21"
};

export default withStyles(Styles)(SearchAppBar);
