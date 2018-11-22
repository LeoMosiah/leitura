import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import { connect } from "react-redux";

function Home(props) {
  const { posts, categories } = props;
  return (
    <div>
      <Header />
      <Main posts={posts} categories={categories} />
      <Footer />
    </div>
  );
}

function mapStateToProps({ posts, categories }) {
  return {
    posts: Object.values(posts).sort((a, b) => b.timestamp - b.timestamp),
    categories
  };
}

export default connect(mapStateToProps)(Home);
