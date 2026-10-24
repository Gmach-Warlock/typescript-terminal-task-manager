import { describe, it } from "node:test";
import assert from "node:assert";
import { dayExists } from "../../../controller/stats/dateHelpers.js";

describe("dayExists", () => {
  it("should return false if the day doesn't exist", () => {
    // arrange
    const day: number = 31;
    const month: number = 2;
    const year: number = 2026;
    // act
    const result = dayExists(year, month, day);
    const expected = false;
    // assert
    assert.strictEqual(result, expected);
  });
});
