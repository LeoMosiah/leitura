import React from "react";
import { Heading, Pane } from "evergreen-ui";
import PostContainer from "./PostContainer";

function Main() {
  return (
    <Pane display="flex">
      <Pane width="60%">
        <Heading marginTop={20} borderBottom="solid 1px">
          News
        </Heading>
        <PostContainer />
      </Pane>
      <Pane width="40%">
        <Heading marginTop={20} marginLeft={5} borderBottom="solid 1px">
          Hot
        </Heading>
        <PostContainer />
      </Pane>
    </Pane>
  );
}

export default Main;
