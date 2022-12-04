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

import { sample4 } from "./input4";

// number[]
export function fullyContains(groups: string) {
  const group = groups.trim().split("\n");
  console.log(
    group.map((x) => {
      const num = x.replace(/[,]/g, ",").split(",");
      console.log(num);
    })
  );
}

console.log(fullyContains(sample4));
