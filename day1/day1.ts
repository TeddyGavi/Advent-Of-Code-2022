import { elf } from "./input";

// take the initial string and create a matrix separated by "\n\n" characters
// convert that array into number and sum each nested array returning the number
//sort the array from highest to lowest
//part 1 is the 0 index, part 2 is the first three

export function sum(arr: number[]): number {
  return arr.reduce((prev, curr) => (prev += curr), 0);
}

export function stringIFYInput(input: string): string[][] {
  const a: string[] = input.split("\n\n");
  const b: string[][] = a.map((x) => x.replace(/([\n])/g, ",").split(","));
  return b;
}

export function matrix(stringMatrix: string[][]): number[][] {
  const matrix: number[][] = [];

  for (const e of stringMatrix) {
    matrix.push(e.map((x) => parseInt(x)).filter((y) => !isNaN(y)));
  }
  return matrix;
}

export function sumNested(matrix: number[][]): number[] {
  const result: number[] = [];
  for (const e of matrix) {
    result.push(sum(e));
  }
  return result;
}

const sums: number[] = sumNested(matrix(stringIFYInput(elf))).sort(
  (a, b) => b - a
);

// console.log("part 1:", sums[0], "part 2:", sums[0] + sums[1] + sums[2]);
