import { describe, it } from "node:test";
import assert from "node:assert";
import { dayExists } from "../../../controller/stats/dateHelpers.js";
describe("dayExists", () => {
    it("should return false if the day doesn't exist", () => {
        // arrange
        const day = 31;
        const month = 2;
        const year = 2026;
        // act
        const result = dayExists(year, month, day);
        const expected = false;
        // assert
        assert.strictEqual(result, expected);
    });
});
//# sourceMappingURL=dateHelpers.test.js.map