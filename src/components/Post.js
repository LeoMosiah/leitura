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
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { timestampToDate } from "../utils/helper";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "evergreen-ui/esm/menu/src/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import MenuList from "@material-ui/core/MenuList/MenuList";

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
  },
  menuItem: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& $primary, & $icon": {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
});

class Post extends Component<{}> {
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
    const { classes, post, authedUser } = this.props;
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
        <MenuList
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <EditOutlinedIcon color="default" /> />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="Edit your post"
            />
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <DeleteForeverOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="Delete your post"
            />
          </MenuItem>
        </MenuList>
      </Card>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
