import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import { connect } from "react-redux";

function Home(props) {
  const { posts, categories, authedUser } = props;
  return (
    <div>
      <Header />
      <Main posts={posts} categories={categories} authedUser={authedUser} />
      <Footer />
    </div>
  );
}

function mapStateToProps({ posts, categories, authedUser }) {
  return {
    posts: Object.values(posts).sort((a, b) => b.timestamp - b.timestamp),
    categories,
    authedUser
  };
}

export default connect(mapStateToProps)(Home);
