"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete la función 'Minimaxsum' a continuación.
 * La función acepta Integer_Array ARR como parámetro.
 */

function miniMaxSum(arr) {
  // Write your code here
  let sum = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
  }
  console.log(sum - max, sum - min);
}

miniMaxSum([1, 2, 3, 4, 5]);

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
