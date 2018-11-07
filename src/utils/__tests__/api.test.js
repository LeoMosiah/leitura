import { tranformArrayOfCommentsIntoMap } from "../api";

describe("api", () => {
  it("maps array of comments into dictionary", () => {
    const expectedDictionary = {
      1: {
        body: "body_1"
      },
      2: {
        body: "body_2"
      }
    };
    const comments = [{ id: 1, body: "body_1" }, { id: 2, body: "body_2" }];

    const commentsAsDictionary = tranformArrayOfCommentsIntoMap(comments);

    expect(commentsAsDictionary).toEqual(expectedDictionary);
  });
});
