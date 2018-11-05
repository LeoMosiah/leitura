import React, { Component } from "react";
import * as API from "../utils/API";
import Post from "./Post";

class App extends Component {
  state = {
    posts: [],
    categories: [],
    comments: [],
    comment: []
  };
  async componentDidMount() {
    this.setState({
      categories: await API.getCategories(),
      posts: await API.getPosts(),
      comments: await API.getComments("8xf0y6ziyjabvozdd253nd"),
      comment: await API.getComment("894tuq4ut84ut8v4t8wun89g")
    });
  }
  render() {
    const { posts, categories, comments, comment } = this.state;
    return (
      <div>
        <Post posts={posts} />
      </div>
    );
  }
}

export default App;
