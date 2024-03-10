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
 * Complete la función 'Plusminus' a continuación.
 * La función acepta Integer_Array ARR como parámetro.
 */

function plusMinus(arr) {
  // Escribe tu código aquí
  let positives = 0,
    negatives = 0,
    zero = 0;

  for (let i = 0; i <= arr.length; i++) {
    const element = arr[i];
    if (element > 0) {
      positives++;
    } else if (element < 0) {
      negatives++;
    } else if (element === 0) {
      zero++;
    }
  }
  console.log((positives / arr.length).toFixed(6));
  console.log((negatives / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
