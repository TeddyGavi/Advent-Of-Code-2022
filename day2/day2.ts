import { sum } from "../day1/day1";
import { input2 } from "./input2";
const input: Input = {
  A: "Y", // ( 2 for paper and 6 for a win)
  B: "X", // ( 1 for rock and 0 for loss )
  C: "Z", // ( 3 + 3 is a draw)
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

Y is draw
X is lose
Z is win

win is 6
loss is 0
tie is 3

*/

const simple: string = `
B Z
A X
B Z
B Z
C Z
B Z
B Z
A X
B Z
B Z
C Z
B Z`;

export function chunkyBoi(toChunki: string[], chunk: number): string[][] {
  const result: string[][] = [];
  const temp = [...toChunki];

  // const temp = inTwo.trim().split("\n");
  for (let i = 0; i < temp.length; i += chunk) {
    let myChunk = temp.slice(i, i + chunk);
    result.push(myChunk);
  }
  return result;
}

interface Input {
  [key: string]: string;
}

interface Point {
  X: number;
  Y: number;
  Z: number;
}

const point: Point = {
  X: 1,
  Y: 2,
  Z: 3,
};

interface Match {
  opp: string;
  me: string;
}
const doesBeat: Input = {
  A: "Y",
  B: "Z",
  C: "X",
};

const isDraw: Input = {
  A: "X",
  B: "Y",
  C: "Z",
};

const isLose: Input = {
  A: "Z",
  B: "X",
  C: "Y",
};

interface WinLosePoints {
  win: number;
  lose: number;
  draw: number;
}

const winLosePoint: WinLosePoints = {
  win: 6,
  lose: 0,
  draw: 3,
};

const partTwo: Input = {
  Y: "draw",
  X: "lose",
  Z: "win",
};

function WLpartTwo(chunk: string): string {
  const temp: string[] = chunk.trim().split("\n");
  return temp
    .map((x: string): string => {
      let newMe: string = " ";
      let [opp, me] = x.split(" ");
      if (partTwo[me] === "draw") {
        newMe = isDraw[opp];
      } else if (partTwo[me] === "lose") {
        newMe = isLose[opp];
      } else if (partTwo[me] === "win") {
        newMe = doesBeat[opp];
      }
      return `${opp} ${newMe}`;
    })
    .join("\n");
}

function WL(chunk: string) {
  const temp: string[] = chunk.trim().split("\n");

  return temp.map((x: string): string => {
    const [opp, me] = x.split(" ");
    let select: string = " ";
    if (doesBeat[opp] === me) {
      select = "win";
    } else if (isDraw[opp] === me) {
      select = "draw";
    } else {
      select = "lose";
    }
    return select;
  });
}

function points(chunk: string): number[] {
  const temp: string[] = chunk.trim().split("\n");

  return temp.map((x: string): number => {
    const [_opp, me] = x.split(" ");

    return point[me as keyof Point];
  });
}

function winLoseTally(wl: string[]): number[] {
  return wl.map((x: string): number => {
    return winLosePoint[x as keyof WinLosePoints];
  });
}

const wl = WL(input2);
export const pointed = points(input2);
export const wlTally = winLoseTally(wl);

// partTwo
const newMeInput = WLpartTwo(input2);
const wlTwo = WL(newMeInput);
const pointedTwo = points(newMeInput);
const tallyTwo = winLoseTally(wlTwo);

export function finalTally(points: number[], tally: number[]): number {
  return sum([...points, ...tally]);
}

// console.log(finalTally(pointed, wlTally));
console.log(finalTally(pointedTwo, tallyTwo));
