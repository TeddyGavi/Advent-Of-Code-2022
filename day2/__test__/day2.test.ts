import { assert } from "chai";
import { finalTally, pointed, wlTally } from "../day2";

/* 
A is rock
B is paper
C is scissors

X is rock 
Y is Paper
Z is Scissors

rock is worth 1
paper is worth 2
scissors worth 3

win is 6
loss is 0
tie is 3

*/

const test: object = {
  A: "Y", // ( 2 for paper and 6 for a win)
  B: "X", // ( 1 for loss )
  C: "Z", // ( 3 + 3 is a draw)
};
// total is 15 (8 + 1 + 6) always on the perspective of you the values
// this is like a bucket sort, each "game" is made up of three rounds

describe("Day 2 Tests\nShould calculate the total score according to the examples given", () => {
  it("With the input of (A Y  B X  C Z) return 15", () => {
    assert.equal(finalTally(pointed, wlTally), 11449);
  });
});
