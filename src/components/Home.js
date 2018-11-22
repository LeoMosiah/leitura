import React from "react";
import Main from "./Main";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import Footer from "./Footer";
import Header from "./Header";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

function Home(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Header />
      <CssBaseline />
      <div className={classes.layout}>
        <Main />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default withStyles(styles)(Home);
