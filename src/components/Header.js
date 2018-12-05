import React from "react";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { styles } from "./styles/headerStyles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton/IconButton";
import SimpleModalWrapped from "./Modal";

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

function NewPostButton(props) {
  const { authedUser, handleOpenModal } = props;
  if (authedUser) {
    return (
      <Link to="/post/new">
        <Button variant="outlined" color="primary" size="small">
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
}

class Header extends React.Component {
  state = {
    modalIsOpen: false
  };
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    const { classes, authedUser, handleSignOut } = this.props;
    return (
      <header>
        <Toolbar className={classes.toolbarMain}>
          <NewPostButton
            authedUser={authedUser}
            handleOpenModal={this.handleOpenModal}
          />
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
          <Authentication
            authedUser={authedUser}
            handleSignOut={handleSignOut}
          />
        </Toolbar>
        <SimpleModalWrapped
          modalIsOpen={this.state.modalIsOpen}
          handleCloseModal={this.handleCloseModal}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Header);
