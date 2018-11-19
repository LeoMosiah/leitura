import { timestampToDate } from "../utils/helper";

describe("timestampToDate", () => {
  it("maps array of posts into dictionary", () => {
    const timestamp = 1467166872634;

    const expectedDate = "MMM D";

    const date = timestampToDate(timestamp);

    expect(date).toEqual(expectedDate);
  });
});
