import { describe, it } from "node:test";
import assert from "node:assert";
import { returnObjInArray } from "../../../controller/tasks/taskHelpers1.js";

describe("existsInArray", () => {
  it("should return undefined if an item with the prop value provided does not exist", () => {
    // arrange
    const arr = [{ title: "Good One" }];
    const prop = "title";
    const value = "Bad one";
    // act
    const answer = returnObjInArray(arr, prop, value);
    const expected = undefined;
    // assert
    assert.strictEqual(answer, expected);
  });
  it("should return true if an item exists with the prop and value provided and it should NOT mutate the original array", () => {
    // arrange
    const arr = [{ title: "Good One" }];
    const prop = "title";
    const value = "Good One";
    // act
    const answer = returnObjInArray(arr, prop, value);
    const expected = { title: "Good One" };
    // assert
    assert.deepStrictEqual(answer, expected);
    assert.deepStrictEqual(arr, [{ title: "Good One" }]);
  });
});
