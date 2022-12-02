"use strict";
exports.__esModule = true;
exports.sumNested = exports.matrix = exports.stringIFYInput = exports.sum = void 0;
var input_1 = require("./input");
// take the initial string and create a matrix separated by "\n\n" characters
// convert that array into number and sum each nested array returning the number
//sort the array from highest to lowest
//part 1 is the 0 index, part 2 is the first three
function sum(arr) {
    return arr.reduce(function (prev, curr) { return (prev += curr); }, 0);
}
exports.sum = sum;
function stringIFYInput(input) {
    var a = input.split("\n\n");
    var b = a.map(function (x) { return x.replace(/([\n])/g, ",").split(","); });
    return b;
}
exports.stringIFYInput = stringIFYInput;
function matrix(stringMatrix) {
    var matrix = [];
    for (var _i = 0, stringMatrix_1 = stringMatrix; _i < stringMatrix_1.length; _i++) {
        var e = stringMatrix_1[_i];
        matrix.push(e.map(function (x) { return parseInt(x); }).filter(function (y) { return !isNaN(y); }));
    }
    return matrix;
}
exports.matrix = matrix;
function sumNested(matrix) {
    var result = [];
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var e = matrix_1[_i];
        result.push(sum(e));
    }
    return result;
}
exports.sumNested = sumNested;
var sums = sumNested(matrix(stringIFYInput(input_1.elf))).sort(function (a, b) { return b - a; });
// console.log("part 1:", sums[0], "part 2:", sums[0] + sums[1] + sums[2]);
