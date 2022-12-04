/* 

2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8


.234.....  2-4
.....678.  6-8

.23......  2-3
...45....  4-5

....567..  5-7
......789  7-9

.2345678.  2-8
..34567..  3-7

.....6...  6-6
...456...  4-6

.23456...  2-6
...45678.  4-8

two pairs are fully contained, so 3-7 is inside 2-8, and 6-6 is inside 4-6.
so we need could create an array of each input and filter the array by the other

maybe we could concat the array filter the new array for duplicates

no that won't work, we should just compare each new array with arr.every(x => arr.includes(x))
return true or false, then convert that to 1 or 0 then sum the array
*/

import { sample4, input4 } from "./input4";
import { sum } from "../utils/utils";

// number[]
function parseToArrPairs(groups: string): string[][][] {
  const group = groups.trim().split("\n");
  const pairs = group.map((x: string): string[] => {
    return x.replace(/[,]/g, ",").split(",");
  });
  return pairs.map((x: string[]) => {
    return x.map((x: string) => x.split("-"));
    // console.log(first, second);
  });
}
function doesContain(pairArr: string[][][]) {
  let sum = 0;
  return pairArr
    .map((x) => {
      const [x1, x2] = x[0];
      const [y1, y2] = x[1];
      let doesIt =
        (Number(x1) <= Number(y1) && Number(x2) >= Number(y2)) ||
        (Number(y1) <= Number(x1) && Number(y2) >= Number(x2))
          ? true
          : false;
      return doesIt;
    })
    .map((x) => (x ? 1 : sum))
    .filter((x) => x)!.length;
}

const parsedSample = parseToArrPairs(sample4);
export const sampleContains: number = doesContain(parsedSample);
const parsedInput = parseToArrPairs(input4);
export const inputContains: number = doesContain(parsedInput);
// console.log(parseToArrPairs(sample4)); // 2
// console.log(doesContain(parseToArrPairs(input4))); // 582
// console.log(parsedSample);
function doesOverlap(pairs: string[][][]) {
  return pairs
    .map((x) => {
      const buildX: number[] = [];
      const buildY: number[] = [];
      const [x1, x2] = x[0];
      const [y1, y2] = x[1];
      for (let i = +x1; i <= +x2; i++) {
        buildX.push(i);
      }
      for (let i = +y1; i <= +y2; i++) {
        buildY.push(i);
      }
      return [buildX, buildY];
    })
    .map((x) => {
      return x[0].filter((y) => x[1].includes(y));
    })
    .map((x) => x.length)
    .filter((x) => x).length;
}

// console.log(doesOverlap(parsedInput));
export const inputOverlaps: number = doesOverlap(parsedInput);
