"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day1_1 = require("../day1");
const testInput_1 = require("./testInput");
const chai_1 = require("chai");
const result = (0, day1_1.sumNested)((0, day1_1.matrix)((0, day1_1.stringIFYInput)(testInput_1.test))).sort((a, b) => b - a);
const partTwo = result[0] + result[1] + result[2];
describe("Day 1 tests", () => {
    it("Results should equal examples, part 1 is 24,000", () => {
        chai_1.assert.equal(result[0], 24000);
    });
    it("Should equal examples given, part 2 is 45,000", () => {
        chai_1.assert.equal(partTwo, 45000);
    });
});
