import { describe, it } from "node:test";
import assert from "node:assert";
import { addElementToArray, removeItemInArray, } from "../../../controller/tasks/taskHelpers1.js";
describe("addElementToArray", () => {
    it("return a new array with the item added to the end of it regardless of types", () => {
        // arrange
        const testArray = [1, 2, 3, 4, "five"];
        const elementToAdd = false;
        // act
        const newArray = addElementToArray(testArray, elementToAdd);
        const expectedArray = [1, 2, 3, 4, "five", false];
        // assert
        assert.deepStrictEqual(newArray, expectedArray);
    });
});
describe("removeItemInArray", () => {
    it("should return undefined if an item with the prop and value provided does not exist in the array provided", () => {
        const testItem2 = { title: "Task 2" };
        const testArray = [testItem2];
        const testProp = "title";
        const findVal = "Task 1";
        // act
        const found = removeItemInArray(testArray, testProp, findVal);
        const expected = undefined;
        // assert
        assert.deepStrictEqual(found, expected);
    });
    it("should return a new array without the item if an item with the prop and value provided exists in the array provided", () => {
        // arrange
        const testItem = { title: "Task 1" };
        const testItem2 = { title: "Task 2" };
        const testArray = [testItem, testItem2];
        const testProp = "title";
        const findVal = "Task 1";
        // act
        const newArray = removeItemInArray(testArray, testProp, findVal);
        const expectedArray = [testItem2];
        // assert
        assert.deepStrictEqual(newArray, expectedArray);
    });
});
//# sourceMappingURL=taskHelpers1.test.js.map