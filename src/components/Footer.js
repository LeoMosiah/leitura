import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles/footerStyle";

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
    </footer>
  );
}

export default withStyles(styles)(Footer);
