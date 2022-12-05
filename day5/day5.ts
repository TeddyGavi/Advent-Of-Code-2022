import { input5, sample5, sample5WithoutMatrix } from "./input5";

// const moveArr = sample5WithoutMatrix.trim().split(/\n/);

interface HardCodedIn {
  [key: number]: string[];
}

interface Moves {
  [key: number]: {
    amount: number;
    from: number;
    to: number;
  };
}

const test: HardCodedIn = {
  1: ["Z", "N"],
  2: ["M", "C", "D"],
  3: ["P"],
};
/* 
const exMoves: Moves = {
  0: {
    amount: 1,
    from: 2,
    to: 1,
  },
};
 */
const inFive: HardCodedIn = {
  1: ["R", "N", "P", "G"],
  2: ["T", "J", "B", "L", "C", "S", "V", "H"],
  3: ["T", "D", "B", "M", "N", "L"],
  4: ["R", "V", "P", "S", "B"],
  5: ["G", "C", "Q", "S", "W", "M", "V", "H"],
  6: ["W", "Q", "S", "C", "D", "B", "J"],
  7: ["F", "Q", "L"],
  8: ["W", "M", "H", "T", "D", "L", "F", "V"],
  9: ["L", "P", "B", "V", "M", "J", "F"],
};

function parseMoves(moves: string[]): Moves {
  const moveList: Moves = {};
  moves.map((x, i) => {
    const temp = [];
    for (const e of x) {
      if (!isNaN(parseInt(e))) {
        temp.push(parseInt(e));
      }
    }
    if (temp.length > 3) {
      const twoDigit = parseInt(temp.slice(0, 2).join(""));
      moveList[i] = {
        amount: twoDigit,
        from: temp[2],
        to: temp[3],
      };
    } else {
      moveList[i] = {
        amount: temp[0],
        from: temp[1],
        to: temp[2],
      };
    }
  });
  return moveList;
}

function move(moves: Moves, crates: HardCodedIn) {
  for (const e in moves) {
    for (let i = 1; i <= moves[e].amount; i++) {
      const { from, to } = moves[e];
      // console.log(e);
      // console.log(crates[from]);
      //   if (moves[e].amount > crates[from].length) {
      //     break;
      //   }
      //   const moveThis = crates[from][crates[from].length - 1];
      //   crates[to] = [...crates[to], moveThis];

      //   crates[from] = [...crates[from].slice(0, -1)];
      // }
      const moveThis = crates[from].pop()!;
      crates[to].push(moveThis || "");
    }
  }
  // console.log(crates);
  return crates;
}

function returnLastEle(afterMoves: HardCodedIn) {
  const result: string[] = [];
  console.log(afterMoves);
  for (const e in afterMoves) {
    let last: string = afterMoves[e].at(-1)!;
    result.push(last);
  }
  return result;
}

// const inputArr = input5.split("\n");
// console.log(test);
// console.log(parseMoves(inputArr));
// console.log(move(moveObj, test));
// console.log(realMove);

const realMove = parseMoves(input5.split("\n"));
// console.log(move(realMove, inFive));
// console.log(test);

console.log(returnLastEle(move(realMove, inFive)).join("")); // HBTMTBSDC!
