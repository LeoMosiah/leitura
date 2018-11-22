import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3
  }
});

const sections = [
  "Technology",
  "Design",
  "Culture",
  "Business",
  "Politics",
  "Opinion",
  "Science",
  "Health",
  "Style",
  "Travel"
];

const social = ["GitHub", "Twitter", "Facebook"];

function Main(props) {
  const { classes } = props;
  return (
    <main>
      {/* Main featured post */}
      <Paper className={classes.mainFeaturedPost}>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Title of a longer featured blog post
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what&apos;s most interesting in
                this post&apos;s contents…
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      {/* End main featured post */}
      {/* Sub featured posts */}
      {/* End sub featured posts */}
      <Grid container spacing={40} className={classes.mainGrid}>
        {/* Main content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            From the Firehose
          </Typography>
          <Divider />
        </Grid>
        {/* End main content */}
        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
          >
            Categories
          </Typography>
          {sections.map(section => (
            <Typography key={section}>{section}</Typography>
          ))}
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
          >
            Social
          </Typography>
          {social.map(network => (
            <Typography key={network}>{network}</Typography>
          ))}
        </Grid>
        {/* End sidebar */}
      </Grid>
    </main>
  );
}

export default withStyles(styles)(Main);
