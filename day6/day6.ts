/*  
start of packet
    bvwbjplbgvbhsrlpgdmjqwftvncz: first marker after character 5
    nppdvjthqldpwncqszvftbrmjlhg: first marker after character 6
    nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: first marker after character 10
    zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: first marker after character 11

    start of message

    mjqjpqmgbljsphdztnvjfqwrcgsmlb: first marker after character 19
    bvwbjplbgvbhsrlpgdmjqwftvncz: first marker after character 23
    nppdvjthqldpwncqszvftbrmjlhg: first marker after character 23
    nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: first marker after character 29
    zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: first marker after character 26

*/

import { sample6, input6 } from "./input6";

// const signal = sample6.split("");
const signal = input6.split("");

console.log(signal);

function findMarker(sig: string[], packetOrMessageStart: number) {
  for (let e = 0; e < sig.length; e++) {
    let letEle = e + packetOrMessageStart;
    const set = new Set(sig.slice(e, e + packetOrMessageStart));
    console.log(e, set);
    if (set.size === packetOrMessageStart) return letEle;
  }
}

console.log(findMarker(signal, 4));
console.log(findMarker(signal, 14));
