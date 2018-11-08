import React from "react";
import { Pane, Icon, Link } from "evergreen-ui";
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
      <Pane
        position="fixed"
        right="25px"
        bottom="25px"
        borderRadius="100%"
        backgroundColor="green"
        width="50px"
        height="50px"
      >
        <Link href="#">
          <Icon
            icon="edit"
            size={30}
            color="white"
            position="absolute"
            transform="translate(-50%, -50%)"
            top="50%"
            left="50%"
          />
        </Link>
      </Pane>
    </Pane>
  );
}

export default Home;
