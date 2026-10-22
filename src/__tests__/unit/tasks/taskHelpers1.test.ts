import { describe, it } from "node:test";
import assert from "node:assert";
import { addElementToArray } from "../../../controller/tasks/taskHelpers1.js";
import type { SimpleType } from "../../../types/types.js";

describe("addElementToArray", () => {
  it("return a new array with the item added to the end of it regardless of types", () => {
    // arrange
    const testArray: SimpleType[] = [1, 2, 3, 4, "five"];
    const elementToAdd = false;
    // act
    const newArray = addElementToArray(testArray, elementToAdd);
    const expectedArray = [1, 2, 3, 4, "five", false];
    // assert
    assert.deepStrictEqual(newArray, expectedArray);
  });
});
