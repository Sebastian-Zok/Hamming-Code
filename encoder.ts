const input = document?.getElementById("inputEncoder");
const output = document?.getElementById("outputEncoder");

input.addEventListener("input", encode);

function encode(e: Event): void {
  const target = e.target as HTMLInputElement;
  let i: Array<number> = Array.from(String(target.value), Number);

  if (inputIsValid(i)) {
    let bitSequence: Array<number> = Array.from(String(i), Number);

    bitSequence = bitSequence.filter(function (value) {
      return !Number.isNaN(value);
    });

    bitSequence.splice(0, 0, 0);
    bitSequence.splice(1, 0, 0);
    bitSequence.splice(3, 0, 0);
    bitSequence.splice(7, 0, 0);

    let indices: Array<number> = new Array();
    for (let i: number = 0; i < bitSequence.length; i++) {
      if (bitSequence[i] == 1) {
        indices.push(i + 1);
      }
    }
    let result: String = indices
      .reduce(function (a, b) {
        return a | b;
      }, 0)
      .toString(2);
    console.log(result);

    bitSequence.splice(0, 1, Number(result.charAt(0)));
    bitSequence.splice(1, 1, Number(result.charAt(1)));
    bitSequence.splice(3, 1, Number(result.charAt(2)));
    bitSequence.splice(7, 1, Number(result.charAt(3)));

    let out: String = bitSequence.toString().replace(/,/g, "");

    output.innerText = "Output: " + out;
  }
}

// Helper functions for input validation

function inputIsValid(inputArray: Array<number>): boolean {
  let input: number = +inputArray.join("");

  if (!isBinary(input) || isNaN(input)) {
    console.log(input);
    output.innerText =
      "Output: Invalid Input (Please enter zeros and ones only)";
    return false;
  } else if (getlength(inputArray) !== 7) {
    output.innerText = "Output: Invalid Input (Please enter 7 bits)";
    return false;
  }
  return true;
}

function getlength(inputArray: Array<number>): number {
  return inputArray.length;
}

function isBinary(number: number): boolean {
  const temp: String = number.toString();
  for (let c of Array.from(temp)) {
    if (c !== "0" && c !== "1") {
      return false;
    }
  }
  return true;
}
