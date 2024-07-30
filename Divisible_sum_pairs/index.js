"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var inputString = "";
var inputLines = [];
var currentLine = 0;
process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on("end", function () {
    inputLines = inputString.split("\n");
    inputString = "";
    main();
});
function readLine() {
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
function divisibleSumPairs(n, k, ar) {
    var result = 0;
    if (n >= 2 && k >= 1) {
        for (var i = 0; i <= n; i++) {
            for (var j = i + 1; j < n; j++) {
                if ((ar[i] + ar[j]) % k === 0) {
                    result++;
                }
            }
        }
    }
    else {
        console.log("n must be greater than 1");
    }
    console.log(result);
    return result;
}
divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
function main() {
    var outputPath = process.env["OUTPUT_PATH"];
    if (!outputPath) {
        throw new Error("The environment variable OUTPUT_PATH is not defined.");
    }
    var ws = (0, fs_1.createWriteStream)(outputPath);
    var firstMultipleInput = readLine()
        .replace(/\s+$/g, "")
        .split(" ");
    var n = parseInt(firstMultipleInput[0], 10);
    var k = parseInt(firstMultipleInput[1], 10);
    var ar = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map(function (arTemp) { return parseInt(arTemp, 10); });
    var result = divisibleSumPairs(n, k, ar);
    ws.write(result + "\n");
    ws.end();
}
