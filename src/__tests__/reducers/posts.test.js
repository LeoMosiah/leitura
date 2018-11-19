import posts from "../../reducers/posts";

describe("Post reducer", function() {
  it("should get initial state", function() {
    const initialState = { comments: {}, authedUser: null };

    const expectedState = {
      comments: {},
      authedUser: null,
      posts: { post_id: { id: "id", body: "body", title: "title" } }
    };

    const action = {
      type: "RECEIVE_POSTS",
      posts: {
        post_id: {
          id: "id",
          body: "body",
          title: "title"
        }
      }
    };

    expect(posts(initialState, action)).toEqual(expectedState);
  });
});
