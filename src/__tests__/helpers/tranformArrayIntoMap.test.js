import { tranformArrayIntoMap } from "../../utils/helper";

describe("tranformArrayIntoMap", () => {
  it("maps array of posts into dictionary", () => {
    const expectedDictionary = {
      1: {
        body: "body_1",
        id: 1
      },
      2: {
        body: "body_2",
        id: 2
      }
    };
    const array = [{ id: 1, body: "body_1" }, { id: 2, body: "body_2" }];

    const arrayAsDictionary = tranformArrayIntoMap(array);

    expect(arrayAsDictionary).toEqual(expectedDictionary);
  });
  it("maps array of comments into dictionary", () => {
    const expectedDictionary = {
      1: {
        body: "body_1",
        id: 1
      },
      2: {
        body: "body_2",
        id: 2
      }
    };
    const array = [[{ id: 1, body: "body_1" }, { id: 2, body: "body_2" }]];

    const arrayAsDictionary = tranformArrayIntoMap(array);

    expect(arrayAsDictionary).toEqual(expectedDictionary);
  });
});
