import React, { Component } from "react";
import Pane from "evergreen-ui/esm/layers/src/Pane";
import Textarea from "evergreen-ui/esm/textarea/src/Textarea";
import Select from "evergreen-ui/esm/select/src/Select";
import TextInput from "evergreen-ui/esm/text-input/src/TextInput";

class NewPost extends Component {
  state = {
    body: ""
  };
  handleChange = e => {
    const text = e.target.value;

    this.setState({
      body: text
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const { body } = this.state;

    this.setState({
      body: ""
    });
  };
  render() {
    return (
      <Pane textAlign="center">
        <Pane>
          <Select marginBottom={20}>
            <option value="Redux" checked label="Redux" />
            <option value="React" label="React" />
            <option value="Udacity" label="Udacity" />
          </Select>
          <TextInput name="post-title" placeholder="Title" />
        </Pane>
        <Pane>
          <Textarea
            width="60%"
            height={300}
            name="body"
            placeholder="Write your post right here"
          />
        </Pane>
      </Pane>
    );
  }
}

export default NewPost;
