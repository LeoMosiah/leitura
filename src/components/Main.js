import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import IconButton from "@material-ui/core/IconButton";
import Reorder from "@material-ui/icons/ReorderOutlined";
import { withStyles } from "@material-ui/core";
import Post from "./Post";
import { Link } from "react-router-dom";
import { styles } from "./styles/mainStyles";

const social = ["GitHub", "Twitter", "Facebook"];

function Main(props) {
  const { classes, posts, categories, authedUser, handleDelete } = props;
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
          <div className={classes.newsSection}>
            <Typography variant="h6" gutterBottom>
              News
            </Typography>
            <IconButton>
              <Reorder color="default" />
            </IconButton>
          </div>
          <Divider className={classes.sidebarDivider} />
          {posts.map(post => (
            <Post
              key={post.id}
              post={post}
              authedUser={authedUser}
              handleDelete={handleDelete}
            />
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
          <Link to="/all">
            <Typography>All</Typography>
          </Link>
          {Object.values(categories).map(category => (
            <Link to={`/${category.path}`} key={category.path}>
              <Typography>{category.name}</Typography>
            </Link>
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
