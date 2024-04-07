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
 * Complete la función 'Timeconversion' a continuación.
 *
 * Se espera que la función devuelva una cadena.
 * La función acepta String S como parámetro.
 */

function timeConversion(s) {
  let [time, meridian] = s.split(/(?=[AP]M)/);
  //time:"07:05:45"
  //meridian: "PM"

  let [hour, minute, second] = time.split(":").map(Number);
  //hour:7
  //minute:5
  //second:45

  if (meridian === "AM" && hour === 12) {
    hour = 0;
  } else if (meridian === "PM" && hour !== 12) {
    hour += 12;
  }

  return `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
}

timeConversion("07:05:45PM");

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const s = readLine();
  const result = timeConversion(s);
  ws.write(result + "\n");
  ws.end();
}
