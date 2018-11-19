import { timestampToDate } from "../utils/helper";

describe("timestampToDate", () => {
  it("maps array of posts into dictionary", () => {
    const timestamp = 1467166872634;

    const expectedDate = "Mai 28";

    const date = timestampToDate(timestamp);

    expect(date).toEqual(expectedDate);
  });
});
