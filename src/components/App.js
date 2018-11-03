import React, { Component } from "react";
import * as API from "../utils/API";

class App extends Component {
  state = {
    posts: [],
    categories: []
  };
  async componentDidMount() {
    this.setState({
      categories: await API.getCategories(),
      posts: await API.getCategories()
    });
  }
  render() {
    const { posts, categories } = this.state;
    console.log(posts, categories);
    return <div>asdasd</div>;
  }
}

export default App;
