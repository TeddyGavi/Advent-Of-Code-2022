import { input3, sample3 } from "../input3";
import { sum } from "../../utils/utils";
import { priorityNumArray, priorityThrees } from "../day3";
import { assert } from "chai";

describe("Day 3 tests Part one", () => {
  it("Should give the correct answer for the sample input", () => {
    assert.equal(sum(priorityNumArray(sample3)), 157);
  });

  it("Should give the right answer when checked online", () => {
    assert.equal(sum(priorityNumArray(input3)), 7821);
  });

  it("Priority threes should give the correct array", () => {
    assert.deepEqual(priorityThrees(sample3), [18, 52]);
  });

  it("Should have the correct answer for part two given sample input", () => {
    assert.equal(sum(priorityThrees(sample3)), 70);
  });

  it("Correct answer for part two!", () => {
    assert.equal(sum(priorityThrees(input3)), 2752);
  });
});
