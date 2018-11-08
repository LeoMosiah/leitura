import React from "react";
import { Pane } from "evergreen-ui";
import Header from "./Header";
import Main from "./Main";
import Button from "evergreen-ui/esm/buttons/src/Button";

function Home(props) {
  const {
    categories,
    handleOpenDialog,
    dialogIsShown,
    handleCloseDialog
  } = props;
  return (
    <Pane>
      <Header
        categories={categories}
        handleOpenDialog={handleOpenDialog}
        dialogIsShown={dialogIsShown}
        handleCloseDialog={handleCloseDialog}
      />
      <Main />
      <Button size={38} appearance="minimal" iconAfter="edit">
        New Post
      </Button>
    </Pane>
  );
}

export default Home;
