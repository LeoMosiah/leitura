import React, { Component } from "react";
import Post from "./Post";

class PostContainer extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
              <Post/>
          </li>
        </ul>
      </div>
    );
  }
}

export  default PostContainer;