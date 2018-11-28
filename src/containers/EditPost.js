import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updatePost } from "../actions/posts";
import { changePost } from "../utils/api";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Card from "@material-ui/core/es/Card/Card";
import * as PropTypes from "prop-types";

const styles = theme => ({
  layout: {
    textAlign: "center",
    border: "1px solid #ccc",
    width: 800,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.unit * 20,
    padding: theme.spacing.unit * 5
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  header: {
    display: "flex",
    alignItems: "baseline"
  },
  button: {
    width: 300,
    letterSpacing: 3.5,
    fontSize: 20
  },
  bodyInput: {
    height: 300
  }
});

const shouldBeDisable = (body, title) => {
  if (!body || !title) return true;
  else return false;
};

class EditPost extends Component {
  state = {
    body: this.props.post.body,
    title: this.props.post.title,
    category: this.props.post.category,
    toHome: false,
    labelWidth: 0
  };
  handleBody = string => {
    this.setState({
      body: string
    });
  };
  handleTitle = string => {
    this.setState(prevState => ({
      title: string
    }));
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { body, title, category } = this.state;
    const { dispatch, post } = this.props;
    let newPost = {
      ...post,
      body,
      title,
      category
    };
    dispatch(updatePost(newPost));
    this.setState(() => ({
      toHome: true
    }));
    await changePost(newPost.id, newPost);
  };
  render() {
    const { toHome, body, title } = this.state;
    const { classes } = this.props;
    if (toHome) return <Redirect to="/" />;
    return (
      <Card className={classes.layout}>
        <div className={classes.header}>
          <TextField
            label="Title"
            placeholder="Write the title of your post"
            multiline
            fullWidth
            value={title}
            margin="normal"
            variant="outlined"
            onChange={event => this.handleTitle(event.target.value)}
          />
        </div>
        <TextField
          label="Body"
          placeholder="Write your post"
          multiline
          fullWidth
          value={body}
          margin="normal"
          variant="outlined"
          onChange={event => this.handleBody(event.target.value)}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={event => this.handleSubmit(event)}
          className={classes.button}
          disabled={shouldBeDisable(body, title)}
        >
          Submit
        </Button>
      </Card>
    );
  }
}

function mapStateToProps({ posts }, props) {
  const { post_id } = props.match.params;
  const post = posts[post_id];
  return {
    post
  };
}

export default connect(mapStateToProps)(withStyles(styles)(EditPost));

EditPost.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};
