//------------------SOLUCION 1------------------------
// startsWith - includes - toLowercase - repleace
//-----------------------------------------------------

/* function processData(input) {
  if (input.startsWith("S")) {
    let newString = input.slice(4, input.length);
    newString = newString.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();

    return newString;
  }
}
 */

//-----------------SOLUCION 2-----------------------
//split - map - charAt - slice - toLowerCase - toUpperCase
//--------------------------------------------------

function processData(input) {
  let [operation, rest] = input.split(";"); //<-- S M:vasoDePlastico()
  let [type, words] = rest.split(":"); //<-- M vasoDePlastico()
  let result = "";

  if (operation.startsWith("S")) {
    let splitWords = "";

    for (let i = 0; i <= words.length; i++) {
      const char = words[i];

      if (char === "(" || char === ")") {
        continue; //<-- ignorar parentesis en metodos
      }

      if (char >= "A" && char <= "Z" && i > 0) {
        splitWords += "" + char.toLowerCase();
      } else {
        splitWords += char;
      }
    }
    result = splitWords;
  } else if (rest.startsWith("C")) {
    const wordsArray = words.split("");
    if (type === M) {
      result = wordsArray.map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toLowerCase + word.slice(1).join("") + "()"
      );
    } else if (type === "C") {
      result = wordsArray.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).join("")
      );
    } else if (type === "V") {
      result = wordsArray
        .map((word, index) =>
          index === 0
            ? word.toLowerCase()
            : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("");
    }
  }
}

processData("S;M:vasoDePlastico()");

/* console.log(processData("S;M:vasoDePlastico"));

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
 */
