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
export function sum(arr: number[]): number {
  return arr.reduce((prev, curr) => (prev += curr), 0);
}
