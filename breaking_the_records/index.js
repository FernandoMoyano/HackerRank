"use strict";

const fs = require("fs");

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
 * Complete la función 'BreakingRecords' a continuación.
 *
 * Se espera que la función devuelva un entero_array.
 * La función acepta puntajes Integer_Array como parámetro.
 */

//- index 1 (min)
//-index 0 (max)
function breakingRecords(scores) {
  // Write your code here
  let counter = [0, 0];
  let n = scores.length;
  if (n === 1) return counter;
  if (n > 0 && n <= 1000) {
    let max = scores[0];
    let min = scores[0];
    //recorremos el array scores uno a uno
    for (let i = 1; i < n; i++) {
      //si se cumplen las dos restricciones
      if (scores[i] >= 0 && scores[i] <= 10 ** 8) {
        //puntero mayor al valor maximo
        if (scores[i] > max) {
          max = scores[i];
          counter[0]++;
          //puntero menor al valor minimo
        } else if (scores[i] < min) {
          min = scores[i];
          counter[i]++;
        }
      }
    }
  }
  return counter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const scores = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((scoresTemp) => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
