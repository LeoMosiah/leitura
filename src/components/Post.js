import React, { Component } from "react";
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
import ThumbsUpIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbsDownIcon from "@material-ui/icons/ThumbDownOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { timestampToDate } from "../utils/helper";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { styles } from "./styles/postStyles";

class Post extends Component {
  state = {
    anchorEl: null
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes, post, authedUser, handleDelete, handleVote } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <Card className={classes.postCard}>
        <CardContent>
          {post.author === authedUser && (
            <IconButton
              className={classes.menu}
              aria-label="More"
              aria-owns={open ? "long-menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          )}
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
            <ThumbsUpIcon
              color="primary"
              onClick={() => handleVote(post, "upVote")}
            />
          </IconButton>
          <IconButton>
            <Badge badgeContent={post.voteScore} color="secondary" />
          </IconButton>
          <IconButton>
            <ThumbsDownIcon
              color="secondary"
              onClick={() => handleVote(post, "downVote")}
            />
          </IconButton>
          <Link to={`/${post.category}/${post.id}`}>
            <Button size="small" color="primary">
              Read More
            </Button>
          </Link>
        </CardActions>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
        >
          <Link to={`/post/edit/${post.id}`}>
            <MenuItem>Edit your post</MenuItem>
          </Link>
          <MenuItem onClick={event => handleDelete(event, post.id)}>
            Delete your post
          </MenuItem>
        </Menu>
      </Card>
    );
  }
}

Post.propTypes = {
  authedUser: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
