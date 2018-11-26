import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import { withStyles } from "@material-ui/core";
import Post from "./Post";

const styles = theme => ({
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 3,
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    },
    textTransform: "capitalize"
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3
  },
  sidebarDivider: {
    marginBottom: theme.spacing.unit * 3
  }
});

const social = ["GitHub", "Twitter", "Facebook"];

function Main(props) {
  const { classes, posts, categories, authedUser } = props;
  return (
    <main>
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
      <Grid container spacing={40} className={classes.mainGrid}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            News
          </Typography>
          <Divider className={classes.sidebarDivider} />
          {posts.map(post => (
            <Post key={post.id} post={post} authedUser={authedUser} />
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
          >
            Categories
          </Typography>
          <Divider className={classes.sidebarDivider} />
          {Object.values(categories).map(category => (
            <Typography key={category.path}>{category.name}</Typography>
          ))}
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
          >
            Social
          </Typography>
          <Divider className={classes.sidebarDivider} />
          {social.map(network => (
            <Typography key={network}>{network}</Typography>
          ))}
        </Grid>
      </Grid>
    </main>
  );
}

export default withStyles(styles)(Main);
