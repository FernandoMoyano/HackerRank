"use strict";

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * Se espera que la función devuelva un entero.
 * La función acepta los siguientes parámetros:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  let result: number = 0;
  if (n >= 2 && k >= 1) {
    for (let i = 0; i <= n; i++) {
      for (let j = i + 1; j < n; j++) {
        if ((ar[i] + ar[j]) % k === 0) {
          result++;
        }
      }
    }
  } else {
    console.log("n must be greater than 1");
  }
  console.log(result);
  return result;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);

function main() {
  const outputPath = process.env["OUTPUT_PATH"];
  if (!outputPath) {
    throw new Error("The environment variable OUTPUT_PATH is not defined.");
  }

  const ws: WriteStream = createWriteStream(outputPath);
  const firstMultipleInput: string[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ");

  const n: number = parseInt(firstMultipleInput[0], 10);

  const k: number = parseInt(firstMultipleInput[1], 10);

  const ar: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result: number = divisibleSumPairs(n, k, ar);

  ws.write(result + "\n");

  ws.end();
}
