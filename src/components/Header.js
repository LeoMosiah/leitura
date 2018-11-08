import React from "react";
import { Button, Dialog, Pane, Paragraph, SearchInput } from "evergreen-ui";
import SignInForm from "./SingInForm";

function Header(props) {
  const {
    categories,
    handleOpenDialog,
    dialogIsShown,
    handleCloseDialog
  } = props;
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
            onClick={() => handleOpenDialog()}
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
        isShown={dialogIsShown}
        title="Sign in to your Leitura's account!"
        onCloseComplete={() => handleCloseDialog()}
        confirmLabel="Custom Label"
        hasFooter={false}
      >
        <SignInForm />
      </Dialog>
    </Pane>
  );
}

export default Header;
