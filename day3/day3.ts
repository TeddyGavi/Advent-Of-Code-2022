import { sample3, input3 } from "./input3";
import { sum, chunkyBoi } from "../utils/utils";
// set up function to get the correct char point
export function stringToCharPoint(char: string): number {
  const codepoint = char.codePointAt(0) || -1;
  return codepoint > 95 ? codepoint - 96 : codepoint - 38;
}
// get number array of matching letters between compartments
export function priorityNumArray(bags: string): number[] {
  const bag = bags.trim().split("\n");
  return bag.map((x) => {
    const partOne = x.slice(0, x.length / 2);
    const partTwo = x.slice(x.length / 2);
    const isMatch = partOne
      .split("")
      .find((x: string): boolean => partTwo.includes(x))!;
    return stringToCharPoint(isMatch);
  });
}

// console.log(sum(priorityNumArray(input3)));
//match letters between all bags
export function priorityThrees(groups: string) {
  const group = groups.trim().split("\n");
  const groupedByThree = chunkyBoi(group, 3);
  return groupedByThree.map((x) => {
    const [first, ...rest] = x;
    const isMatch = first
      .split("")
      .find((x) => rest.every((y) => y.includes(x)))!;
    return stringToCharPoint(isMatch);
  });
}

console.log(sum(priorityThrees(input3)));
