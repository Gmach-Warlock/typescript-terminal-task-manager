import { describe, it } from "node:test";
import assert from "node:assert";
import type { TaskInfo } from "../../../types/interfaces.js";
import {
  returnFilterArray,
  returnSearchArray,
} from "../../../controller/tasks/taskHelpers2.js";

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

describe("returnFilterArray", () => {
  it("should return an array filtered by the given filterType", () => {
    // arrange
    const testItem1: TaskInfo = {
      title: "Task 1",
      description: "Desc 1",
      priority: "Low",
      completed: false,
    };
    const testItem2: TaskInfo = {
      title: "Task 2",
      description: "Desc 2",
      priority: "Medium",
      completed: true,
    };
    const testItem3: TaskInfo = {
      title: "Task 3",
      description: "Desc 3",
      priority: "High",
      completed: false,
    };
    const testArr = [testItem1, testItem2, testItem3];
    const filterProp1 = "Complete";
    const filterProp2 = "Incomplete";
    const filterProp3 = "Low";
    const filterProp4 = "Medium";
    const filterProp5 = "High";
    const filterProp6 = "All";
    // act
    const result1 = returnFilterArray(testArr, filterProp1);
    const result2 = returnFilterArray(testArr, filterProp2);
    const result3 = returnFilterArray(testArr, filterProp3);
    const result4 = returnFilterArray(testArr, filterProp4);
    const result5 = returnFilterArray(testArr, filterProp5);
    const result6 = returnFilterArray(testArr, filterProp6);
    const expected1 = [testItem2];
    const expected2 = [testItem1, testItem3];
    const expected3 = [testItem1];
    const expected4 = [testItem2];
    const expected5 = [testItem3];
    const expected6 = [testItem1, testItem2, testItem3];
    // assert
    assert.deepStrictEqual(result1, expected1);
    assert.deepStrictEqual(result2, expected2);
    assert.deepStrictEqual(result3, expected3);
    assert.deepStrictEqual(result4, expected4);
    assert.deepStrictEqual(result5, expected5);
    assert.deepStrictEqual(result6, expected6);
  });
});
