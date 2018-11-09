import React from "react";
import { Button, Dialog, Pane, Paragraph, SearchInput } from "evergreen-ui";
import SignInForm from "./SingInForm";
import connect from "react-redux/src/connect/connect";

function Header(props) {
  const { categories } = props;
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
        {Object.values(categories).map(category => (
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
        isShown={false}
        title="Sign in to your Leitura's account!"
        confirmLabel="Custom Label"
        hasFooter={false}
      >
        <SignInForm />
      </Dialog>
    </Pane>
  );
}
function mapStateToProps({ categories }) {
  return {
    categories
  };
}

export default connect(mapStateToProps)(Header);
