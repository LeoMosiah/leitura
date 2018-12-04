import commentsReducer from "../../reducers/comments";
import {
  receiveComments,
  addComment,
  removeComment,
  toggleComment,
  updateComment
} from "../../actions/comments";

describe("Comments reducer", function() {
  it("should get initial state", function() {
    const initialState = {};

    const commentsFetch = {
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
    expect(
      commentsReducer(initialState, receiveComments(commentsFetch))
    ).toEqual(expectedState);
  });
  it("should add a comment to the state", function() {
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

    const comment = { id: "id 3", body: "body 3", title: "title 3" };

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

    expect(commentsReducer(initialState, addComment(comment))).toEqual(
      expecteState
    );
  });

  it("should remove a comment to the state", function() {
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
    expect(commentsReducer(initialState, removeComment(id))).toEqual(
      expecteState
    );
  });

  it("should handle  upVote ", function() {
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

    const comment = {
      id: "id 3",
      body: "body 3",
      title: "title 3",
      voteScore: 0
    };
    expect(
      commentsReducer(initialState, toggleComment(comment, "upVote"))
    ).toEqual(expecteState);
  });

  it("should handle  downVote ", function() {
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
        voteScore: -1
      }
    };

    const comment = {
      id: "id 3",
      body: "body 3",
      title: "title 3",
      voteScore: 0
    };
    expect(
      commentsReducer(initialState, toggleComment(comment, "downVote"))
    ).toEqual(expecteState);
  });

  it("should handle  update a comment ", function() {
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
      },
      "id 3": {
        id: "id 3",
        body: "new body 3",
        title: "new title 3"
      }
    };

    const comment = {
      id: "id 3",
      body: "new body 3",
      title: "new title 3"
    };

    expect(commentsReducer(initialState, updateComment(comment))).toEqual(
      expecteState
    );
  });
});
