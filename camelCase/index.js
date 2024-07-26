//startsWith()
//includes()
//toLowercase()
//repleace()

function processData(input) {
  //Enter your code here
  if (input.startsWith("S")) {
    let newString = input.toLowerCase();
    newString = newString.repleace([a - z]([A - Z]) / g, "$1 $2");
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
