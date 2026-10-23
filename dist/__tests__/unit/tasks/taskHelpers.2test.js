import { describe, it } from "node:test";
import assert from "node:assert";
import { returnSearchArray } from "../../../controller/tasks/taskHelpers2.js";
describe("returnSearchArray", () => {
    it("should return undefined if there is not an item with the prop and value provided in the array provided", () => {
        // arrange
        const testItem = { title: "Task 1", description: "Desc 2" };
        const testArr = [testItem];
        const searchProp = "title";
        const searchTerm = "Absent";
        // act
        const result = returnSearchArray(testArr, searchProp, searchTerm);
        const expected = undefined;
        // assert
        assert.strictEqual(result, expected);
    });
});
//# sourceMappingURL=taskHelpers.2test.js.map