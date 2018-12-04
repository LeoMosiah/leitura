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
import { styles } from "./styles/commentStyle";

function Comment(props) {
  const { comment, classes, commentCallbackHandler, authedUser } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="p">
          {`${timestampToDate(comment.timestamp)} ${comment.author}`}
        </Typography>
        <Typography component="p">{comment.body}</Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <IconButton
          onClick={() =>
            commentCallbackHandler("vote", {
              comment: comment,
              option: "upVote"
            })
          }
        >
          <ThumbsUpIcon color="primary" />
        </IconButton>
        <IconButton>
          <Badge badgeContent={comment.voteScore} color="secondary" />
        </IconButton>
        <IconButton
          onClick={() =>
            commentCallbackHandler("vote", {
              comment: comment,
              option: "downVote"
            })
          }
        >
          <ThumbsDownIcon color="secondary" />
        </IconButton>
        {comment.author === authedUser && (
          <React.Fragment>
            <IconButton
              onClick={() => commentCallbackHandler("delete", comment)}
            >
              <DeleteForeverOutlinedIcon color="secondary" />
            </IconButton>
            <IconButton>
              <EditOutlinedIcon
                color="primary"
                onClick={() => commentCallbackHandler("edit", comment)}
              />
            </IconButton>
          </React.Fragment>
        )}
      </CardActions>
    </Card>
  );
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comment);
