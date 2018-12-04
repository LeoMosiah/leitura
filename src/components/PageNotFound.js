import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles/pageNotFound";
import * as PropTypes from "prop-types";
import Paper from "@material-ui/core/es/Paper/Paper";

function PageNotFound(props) {
  const { classes } = props;
  return (
    <Paper className={classes.container}>
      <div className={classes.frame}>
        <Typography variant="h2" className={classes.title}>
          Page Not Found
        </Typography>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(PageNotFound);

PageNotFound.propTypes = {
  classes: PropTypes.object.isRequired
};
