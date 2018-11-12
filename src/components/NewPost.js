import React, { Component } from "react";
import Pane from "evergreen-ui/esm/layers/src/Pane";
import Textarea from "evergreen-ui/esm/textarea/src/Textarea";
import Select from "evergreen-ui/esm/select/src/Select";
import TextInput from "evergreen-ui/esm/text-input/src/TextInput";
import { Button } from "evergreen-ui";
import { addPost } from "../utils/api";

class NewPost extends Component {
  state = {
    body: "",
    title: "",
    category: ""
  };
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
    addPost({
      category,
      title,
      body
    });
    this.setState({
      body: "",
      title: "",
      category: ""
    });
  };
  render() {
    return (
      <Pane textAlign="center">
        <Pane>
          <Select
            marginBottom={20}
            onChange={event => this.handleCategory(event.target.value)}
          >
            <option value="Redux" checked label="Redux" />
            <option value="React" label="React" />
            <option value="Udacity" label="Udacity" />
          </Select>
          <TextInput
            name="post-title"
            placeholder="Title"
            onChange={event => this.handleTitle(event.target.value)}
          />
        </Pane>
        <Pane>
          <Textarea
            width="60%"
            height={300}
            name="body"
            placeholder="Write your post right here"
            onChange={event => this.handleBody(event.target.value)}
          />
        </Pane>
        <Button
          onClick={e => this.handleSubmit(e)}
          appearance="primary"
          marginRight={16}
          intent="success"
        >
          Post
        </Button>
      </Pane>
    );
  }
}

export default NewPost;
