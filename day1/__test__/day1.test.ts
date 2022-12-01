import { stringIFYInput, matrix, sumNested } from "../day1";
import { test } from "./testInput";
import { assert } from "chai";

const result: number[] = sumNested(matrix(stringIFYInput(test))).sort(
  (a, b) => b - a
);

const partTwo = result[0] + result[1] + result[2];

describe("Day 1 tests", () => {
  it("Results should equal examples, part 1 is 24,000", () => {
    assert.equal(result[0], 24000);
  });
  it("Should equal examples given, part 2 is 45,000", () => {
    assert.equal(partTwo, 45000);
  });
});
