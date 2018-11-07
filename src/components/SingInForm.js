import React, { Component } from "react";
import { Pane, TextInput, Text, Button } from "evergreen-ui";

class SingInForm extends Component {
  render() {
    return (
      <Pane textAlign="center">
        <TextInput width="100%" marginBottom={16} placeholder="Username" />
        <TextInput
          width="100%"
          marginBottom={10}
          placeholder="Password"
          type="password"
        />
        <Button
          width="100%"
          appearance="primary"
          intent="success"
          textAlign="center"
        >
          Log In
        </Button>
        <Text marginTop={16}>No account? Create one</Text>
      </Pane>
    );
  }
}

export default SingInForm;
