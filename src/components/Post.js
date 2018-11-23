import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import CommentIcon from "@material-ui/icons/Comment";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { timestampToDate } from "../utils/helper";
import { Link } from "react-router-dom";

const styles = theme => ({
  postCard: {
    width: "100%",
    marginTop: theme.spacing.unit * 2,
    border: "1px solid #ccc"
  },
  postDetails: {
    textTransform: "capitalize",
    marginTop: theme.spacing.unit * 1
  },
  button: {
    margin: theme.spacing.unit
  },
  menu: {
    float: "right",
    position: "relative",
    top: "-1.2rem",
    left: "2rem"
  }
});
function Post(props) {
  const { classes, post } = props;
  return (
    <Card className={classes.postCard}>
      <CardContent>
        <IconButton className={classes.menu}>
          <MoreVertIcon />
        </IconButton>
        <Typography gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography component="p" className={classes.postDetails}>
          {`${timestampToDate(post.timestamp)} ${post.author}`}
        </Typography>
        <Typography component="p" className={classes.postDetails}>
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Badge badgeContent={post.commentCount} color="secondary">
            <CommentIcon color="primary" />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={post.voteScore} color="secondary">
            <ThumbsUpDownIcon color="primary" />
          </Badge>
        </IconButton>
        <Link to={`/${post.category}/${post.id}`}>
          <Button size="small" color="primary">
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
