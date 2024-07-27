//startsWith()
//includes()
//toLowercase()
//repleace()

function processData(input) {
  //Enter your code here
  if (input.startsWith("S")) {
    let newString = input.slice(4, input.length);
    newString = newString.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
    return newString;
  }
}

console.log(processData("S;M:vasoDePlastico"));

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
