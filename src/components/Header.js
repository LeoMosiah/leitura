import React from "react";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { styles } from "./styles/headerStyles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton/IconButton";

function Authentication(props) {
  const { authedUser, handleSignOut } = props;
  if (authedUser) {
    return (
      <IconButton color="inherit" onClick={() => handleSignOut()}>
        <AccountCircle />
      </IconButton>
    );
  } else
    return (
      <Link to="/signIn">
        <Button variant="outlined" color="primary" size="small">
          Sign in
        </Button>
      </Link>
    );
}

function Header(props) {
  const { classes, authedUser, handleOpenModal, handleSignOut } = props;
  const NewPostButton = authedUser => {
    if (authedUser) {
      return (
        <Link to="/post/new">
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => handleOpenModal()}
          >
            New Post
          </Button>
        </Link>
      );
    } else {
      return (
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => handleOpenModal()}
        >
          New Post
        </Button>
      );
    }
  };
  return (
    <header>
      <Toolbar className={classes.toolbarMain}>
        {NewPostButton(authedUser)}
        <Typography
          component="h2"
          variant="h5"
          color="primary"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link to="/">Leitura</Link>
        </Typography>
        <Authentication authedUser={authedUser} handleSignOut={handleSignOut} />
      </Toolbar>
    </header>
  );
}

export default withStyles(styles)(Header);
