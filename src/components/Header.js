import React from "react";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { styles } from "./styles/headerStyles";

function Header(props) {
  const { classes } = props;
  return (
    <header>
      <Toolbar className={classes.toolbarMain}>
        <Link to="/new">
          <Button variant="outlined" color="primary" size="small">
            New Post
          </Button>
        </Link>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Leitura
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Link to="/signIn">
          <Button variant="outlined" color="primary" size="small">
            Sign up
          </Button>
        </Link>
      </Toolbar>
    </header>
  );
}

export default withStyles(styles)(Header);
