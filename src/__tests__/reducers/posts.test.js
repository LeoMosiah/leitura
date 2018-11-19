import postsReducer from "../../reducers/posts";
import {
  receivePosts,
  addPost,
  removePost,
  togglePost
} from "../../actions/posts";

describe("Post reducer", function() {
  it("should get initial state", function() {
    const initialState = {};

    const postsFetch = {
      "id 1": {
        id: "id 1",
        body: "body 1",
        title: "title 1"
      },
      "id 2": {
        id: "id 2",
        body: "body 2",
        title: "title 2"
      }
    };
    const expectedState = {
      "id 1": {
        id: "id 1",
        body: "body 1",
        title: "title 1"
      },
      "id 2": {
        id: "id 2",
        body: "body 2",
        title: "title 2"
      }
    };
    expect(postsReducer(initialState, receivePosts(postsFetch))).toEqual(
      expectedState
    );
  });
  it("should add a post to the state", function() {
    const initialState = {
      "id 1": {
        id: "id 1",
        body: "body 1",
        title: "title 1"
      },
      "id 2": {
        id: "id 2",
        body: "body 2",
        title: "title 2"
      }
    };

    const post = { id: "id 3", body: "body 3", title: "title 3" };

    const expecteState = {
      "id 1": {
        id: "id 1",
        body: "body 1",
        title: "title 1"
      },
      "id 2": {
        id: "id 2",
        body: "body 2",
        title: "title 2"
      },
      "id 3": {
        id: "id 3",
        body: "body 3",
        title: "title 3"
      }
    };

    expect(postsReducer(initialState, addPost(post))).toEqual(expecteState);
  });

  it("should remove a post to the state", function() {
    const initialState = {
      "id 1": {
        id: "id 1",
        body: "body 1",
        title: "title 1"
      },
      "id 2": {
        id: "id 2",
        body: "body 2",
        title: "title 2"
      },
      "id 3": {
        id: "id 3",
        body: "body 3",
        title: "title 3"
      }
    };

    const expecteState = {
      "id 1": {
        id: "id 1",
        body: "body 1",
        title: "title 1"
      },
      "id 2": {
        id: "id 2",
        body: "body 2",
        title: "title 2"
      }
    };

    const id = "id 3";
    expect(postsReducer(initialState, removePost(id))).toEqual(expecteState);
  });

  it("should toggle a post to the state", function() {
    const initialState = {
      "id 1": {
        id: "id 1",
        body: "body 1",
        title: "title 1",
        voteScore: 0
      },
      "id 2": {
        id: "id 2",
        body: "body 2",
        title: "title 2",
        voteScore: 0
      },
      "id 3": {
        id: "id 3",
        body: "body 3",
        title: "title 3",
        voteScore: 0
      }
    };

    const expecteState = {
      "id 1": {
        id: "id 1",
        body: "body 1",
        title: "title 1",
        voteScore: 0
      },
      "id 2": {
        id: "id 2",
        body: "body 2",
        title: "title 2",
        voteScore: 0
      },
      "id 3": {
        id: "id 3",
        body: "body 3",
        title: "title 3",
        voteScore: 1
      }
    };

    const post = {
      id: "id 3",
      body: "body 3",
      title: "title 3",
      voteScore: 1
    };
    expect(postsReducer(initialState, togglePost(post))).toEqual(expecteState);
  });
});
