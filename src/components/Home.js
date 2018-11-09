import React from "react";
import Header from "./Header";
import Main from "./Main";
import Pane from "evergreen-ui/esm/layers/src/Pane";
import Icon from "evergreen-ui/esm/icon/src/Icon";
import Link from "react-router-dom/es/Link";

function Home() {
  return (
    <Pane>
      <Header />
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
        <Link to="/new">
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
