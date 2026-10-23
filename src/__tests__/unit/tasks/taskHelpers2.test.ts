import { describe, it } from "node:test";
import assert from "node:assert";
import { returnSearchArray } from "../../../controller/tasks/taskHelpers2.js";

describe("returnSearchArray", () => {
  it("should return an empty array if there is not an item with the value provided in the array provided", () => {
    // arrange
    const testItem = { title: "Task 1", description: "Desc 2" };
    const testArr = [testItem];
    const searchProp = "title";
    const searchTerm = "Absent";
    // act
    const result = returnSearchArray(testArr, searchProp, searchTerm);
    const expected: [] = [];
    // assert
    assert.deepStrictEqual(result, expected);
  });
  it("should return an array with items that fit the search criteria", () => {
    // arrange
    const testItem1 = { title: "Task 1", description: "Desc 1" };
    const testItem2 = { title: "Task 2", description: "Desc 2" };
    const testItem3 = { title: "Task 3", description: "Desc 3" };
    const testArr = [testItem1, testItem2, testItem3];
    const searchProp1 = "title";
    const searchProp2 = "description";
    const searchTerm1 = "Task";
    const searchTerm2 = "Desc 1";
    // act
    const result1 = returnSearchArray(testArr, searchProp1, searchTerm1);
    const result2 = returnSearchArray(testArr, searchProp2, searchTerm2);
    const expected1: object[] = [testItem1, testItem2, testItem3];
    const expected2: object[] = [testItem1];
    // assert
    assert.deepStrictEqual(result1, expected1);
    assert.deepStrictEqual(result2, expected2);
  });
});
