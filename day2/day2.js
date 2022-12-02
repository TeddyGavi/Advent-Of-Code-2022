"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.finalTally = exports.wlTally = exports.pointed = void 0;
var day1_1 = require("../day1/day1");
var input2_1 = require("./input2");
var input = {
    A: "Y",
    B: "X",
    C: "Z"
};
// total is 15 (8 + 1 + 6) always on the perspective of you the values
// this is like a bucket sort, each "game" is made up of three rounds
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
var simple = "\nB Z\nA X\nB Z\nB Z\nC Z\nB Z\nB Z\nA X\nB Z\nB Z\nC Z\nB Z";
function chunkyBoi(inTwo) {
    var result = [];
    var temp = inTwo.trim().split("\n");
    for (var i = 0; i < temp.length; i++) {
        var mychunk = temp.slice(i, (i += 3));
        result.push(mychunk);
    }
    return result;
}
var point = {
    X: 1,
    Y: 2,
    Z: 3
};
var doesBeat = {
    A: "Y",
    B: "Z",
    C: "X"
};
var isDraw = {
    A: "X",
    B: "Y",
    C: "Z"
};
var winLosePoint = {
    win: 6,
    lose: 0,
    draw: 3
};
var buckets = Object.entries(input);
function WL(chunk) {
    var temp = chunk.trim().split("\n");
    return temp.map(function (x) {
        var _a = x.split(" "), opp = _a[0], me = _a[1];
        var select = " ";
        if (doesBeat[opp] === me) {
            select = "win";
        }
        else if (isDraw[opp] === me) {
            select = "draw";
        }
        else {
            select = "lose";
        }
        return select;
    });
}
function points(chunk) {
    var temp = chunk.trim().split("\n");
    return temp.map(function (x) {
        var _a = x.split(" "), _opp = _a[0], me = _a[1];
        return point[me];
    });
}
function winLoseTally(wl) {
    return wl.map(function (x) {
        return winLosePoint[x];
    });
}
var wl = WL(input2_1.input2);
exports.pointed = points(input2_1.input2);
exports.wlTally = winLoseTally(wl);
function finalTally(points, tally) {
    return (0, day1_1.sum)(__spreadArray(__spreadArray([], points, true), tally, true));
}
exports.finalTally = finalTally;
// console.log(finalTally(pointed, wlTally));
