function processData(input) {
  let lines = input.trim().split("\n");

  lines.forEach((line) => {
    let [operation, type, text] = line.split(";");

    if (operation === "S") {
      let result = "";
      let isMethod = text.endsWith("()");
      if (isMethod) {
        text = text.slice(0, -2);
      }

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === char.toUpperCase() && i > 0) {
          result += " " + char.toLowerCase();
        } else {
          result += char;
        }
      }

      if (type === "C") {
        result = result.charAt(0).toLowerCase() + result.slice(1);
      }

      if (isMethod) {
        result = result.trim();
      }

      console.log(result.trim());
    } else if (operation === "C") {
      const wordsArray = text.split(" ");
      let combined = "";

      for (let i = 0; i < wordsArray.length; i++) {
        const word = wordsArray[i];
        if (type === "V") {
          combined +=
            i === 0
              ? word.toLowerCase()
              : word.charAt(0).toUpperCase() + word.slice(1);
        } else if (type === "C") {
          combined += word.charAt(0).toUpperCase() + word.slice(1);
        } else if (type === "M") {
          combined +=
            i === 0
              ? word.toLowerCase()
              : word.charAt(0).toUpperCase() + word.slice(1);
        }
      }

      if (type === "M") {
        combined += "()";
      }

      console.log(combined);
    }
  });
}
processData("S;M;plasticCup()");
processData("C;V;mobile phone");
processData("C;C;coffee machine");
processData("S;C;LargeSoftwareBook");
processData("C;M;white sheet of paper");
processData("S;V;pictureFrame");
