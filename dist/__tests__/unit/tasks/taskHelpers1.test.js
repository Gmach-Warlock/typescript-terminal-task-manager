import { describe, it } from "node:test";
import assert from "node:assert";
import { addElementToArray, removeItemInArray, returnObjInArray, } from "../../../controller/tasks/taskHelpers1.js";
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
        const testItem = { title: "Task 1" };
        const testItem2 = { title: "Task 2" };
        const testArray = [testItem2];
        // act
        const found = removeItemInArray(testArray, testItem, "title");
        const expected = undefined;
        // assert
        assert.deepStrictEqual(found, expected);
    });
    it("should return a new array without the item if an item with the prop and value provided exists in the array provided", () => {
        // arrange
        const testItem = { title: "Task 1" };
        const testItem2 = { title: "Task 2" };
        const testArray = [testItem, testItem2];
        // act
        const newArray = removeItemInArray(testArray, testItem, "title");
        const expectedArray = [testItem2];
        // assert
        assert.deepStrictEqual(newArray, expectedArray);
    });
});
//# sourceMappingURL=taskHelpers1.test.js.map