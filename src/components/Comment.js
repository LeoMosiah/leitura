import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ThumbsUpIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbsDownIcon from "@material-ui/icons/ThumbDownOutlined";
import { timestampToDate } from "../utils/helper";

const styles = theme => ({
  postCard: {
    width: 500,
    marginTop: theme.spacing.unit * 2,
    border: "1px solid #ccc"
  },
  postDetails: {
    textTransform: "capitalize",
    marginTop: theme.spacing.unit * 1
  }
});

function Comment(props) {
  const { comment, classes } = props;
  return (
    <Card className={classes.postCard}>
      <CardContent>
        <Typography component="p" className={classes.postDetails}>
          {`${timestampToDate(comment.timestamp)} ${comment.author}`}
        </Typography>
        <Typography component="p" className={classes.postDetails}>
          {comment.body}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <ThumbsUpIcon color="primary" />
        </IconButton>
        <Badge badgeContent={comment.voteScore} color="secondary" />
        <IconButton>
          <ThumbsDownIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comment);
