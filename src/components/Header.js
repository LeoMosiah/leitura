import React, { Component } from "react";
import {
  Pane,
  Button,
  SearchInput,
  Paragraph,
  Link,
  Dialog
} from "evergreen-ui";
import SignInForm from "./SingInForm";

class Header extends Component {
  state = {
    dialogIsShown: false
  };
  handleClick() {}
  render() {
    return (
      <Pane>
        <Pane display="flex">
          <Pane flex={1}>
            <Paragraph marginTop={5} size={500} color="dark">
              Leitura
            </Paragraph>
          </Pane>
          <Pane>
            <SearchInput placeholder="Search Post" marginRight={6} />
            <Button
              marginRight={6}
              marginBottom={4}
              appearance="primary"
              intent="success"
              onClick={() => this.setState({ dialogIsShown: true })}
            >
              Log In
            </Button>
            <Button
              marginRight={6}
              marginBottom={4}
              appearance="primary"
              intent="warning"
            >
              Sign up
            </Button>
          </Pane>
        </Pane>
        <Pane
          display="inline-flex"
          width="100%"
          className="navigation-bar__categories"
        >
          {categories.map(category => (
            <Button
              marginRight={12}
              appearance="minimal"
              intent="success"
              className="navigation-bar__category"
              key={category.name}
            >
              {category.name.toUpperCase()}
            </Button>
          ))}
        </Pane>
        <Dialog
          isShown={this.state.dialogIsShown}
          title="Sign in to your Leitura's account!"
          onCloseComplete={() => this.setState({ dialogIsShown: false })}
          confirmLabel="Custom Label"
          hasFooter={false}
        >
          <SignInForm />
        </Dialog>
      </Pane>
    );
  }
}

export default Header;
