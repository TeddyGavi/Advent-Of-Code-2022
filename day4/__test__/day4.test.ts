import { assert } from "chai";
import { inputContains, inputOverlaps, sampleContains } from "../day4";

describe("Day 4 this is getting harder...", () => {
  it("Should correctly id the amount of fully contained pairs", () => {
    assert.equal(sampleContains, 2);
  });

  it("Should be correct for part one", () => {
    assert.equal(inputContains, 582);
  });
  it("Should be correct for part two", () => {
    assert.equal(inputOverlaps, 893);
  });
});
