import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddPost } from "../actions/posts";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import withStyles from "@material-ui/core/es/styles/withStyles";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import * as ReactDOM from "react-dom";
import Card from "@material-ui/core/es/Card/Card";
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
  layout: {
    textAlign: "center",
    width: 800,
    backgroundColor: "#f9f9f9",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.unit * 3,
    padding: theme.spacing.unit
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

const shouldBeDisable = (category, body, title) => {
  if (!category || !body || !title) return true;
  else return false;
};

class NewPost extends Component {
  state = {
    body: "",
    title: "",
    category: "",
    toHome: false,
    labelWidth: 0
  };
  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }
  handleBody = string => {
    this.setState({
      body: string
    });
  };
  handleTitle = string => {
    this.setState({
      title: string
    });
  };
  handleCategory = string => {
    this.setState({
      category: string
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { body, title, category } = this.state;
    const { dispatch } = this.props;

    let post = { body, title, category };

    dispatch(handleAddPost(post));

    this.setState(() => ({
      body: "",
      title: "",
      category: "",
      toHome: true
    }));
  };
  render() {
    const { toHome, category, body, title } = this.state;
    const { classes } = this.props;
    if (toHome) return <Redirect to="/" />;
    return (
      <Card className={classes.layout}>
        <Typography variant="h5" component="h2">
          New Post
        </Typography>
        <div className={classes.header}>
          <TextField
            label="Title"
            placeholder="Write the title of your post"
            multiline
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={event => this.handleTitle(event.target.value)}
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-age-simple"
            >
              Category
            </InputLabel>
            <Select
              value={category}
              onChange={event => this.handleCategory(event.target.value)}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="age"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="React">React</MenuItem>
              <MenuItem value="Redux">Redux</MenuItem>
              <MenuItem value="Udacity">Udacity</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          label="Body"
          placeholder="Write your post"
          multiline
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={event => this.handleBody(event.target.value)}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={event => this.handleSubmit(event)}
          className={classes.button}
          disabled={shouldBeDisable(category, body, title)}
        >
          Submit
        </Button>
      </Card>
    );
  }
}

export default connect()(withStyles(styles)(NewPost));
