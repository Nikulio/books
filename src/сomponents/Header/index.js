import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, withRouter } from "react-router-dom";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link : {
    color : "#fff",
    textDecoration : "none"
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/*<IconButton*/}
              {/*className={classes.menuButton}*/}
              {/*color="inherit"*/}
              {/*aria-label="Menu"*/}
            {/*>*/}
              {/*<MenuIcon />*/}
            {/*</IconButton>*/}
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Books
            </Typography>

            <Button className={classes.button} color="inherit">
              <Link className={classes.link} to={"/"}>Home</Link>
            </Button>
            <Button className={classes.button} color="inherit">
              <Link className={classes.link} to={"/add"}>Add book</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(withStyles(styles)(connect(mapStateToProps)(Header)));
