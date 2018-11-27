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
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { timestampToDate } from "../utils/helper";

const styles = theme => ({
  card: {
    border: "1px solid #ccc"
  },
  cardAction: {
    marginTop: -15
  }
});

function Comment(props) {
  const { comment, classes, handleDelete, handleVoteComment } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="p">
          {`${timestampToDate(comment.timestamp)} ${comment.author}`}
        </Typography>
        <Typography component="p">{comment.body}</Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <IconButton onClick={() => handleVoteComment(comment, "upVote")}>
          <ThumbsUpIcon color="primary" />
        </IconButton>
        <IconButton>
          <Badge badgeContent={comment.voteScore} color="secondary" />
        </IconButton>
        <IconButton onClick={() => handleVoteComment(comment, "downVote")}>
          <ThumbsDownIcon color="secondary" />
        </IconButton>
        <IconButton onClick={() => handleDelete(comment.id)}>
          <DeleteForeverOutlinedIcon color="secondary" />
        </IconButton>
        <IconButton>
          <EditOutlinedIcon color="default" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comment);
