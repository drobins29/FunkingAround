import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";

const styles = theme => ({
  flex: {
    textDecoration: "none"
  }
});

function renderLinks(authenticated) {
  if (authenticated) {
    return (
      <div>
        <Button color="inherit" component={Link} to={"/signout"}>
          Sign Out
        </Button>
        <Button color="inherit" component={Link} to={"/feature"}>
          Feature
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Button color="inherit" component={Link} to={"/signin"}>
          Sign In
        </Button>
        <Button color="inherit" component={Link} to={"/signup"}>
          Sign Up
        </Button>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    const { classes, authenticated } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
              component={Link}
              to={"/"}
            >
              News
            </Typography>
            {renderLinks(authenticated)}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(withRoot(withStyles(styles)(Header)));
