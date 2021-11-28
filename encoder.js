const input = document === null || document === void 0 ? void 0 : document.getElementById("inputEncoder");
const output = document === null || document === void 0 ? void 0 : document.getElementById("outputEncoder");
input.addEventListener("input", encode);
function encode(e) {
    const target = e.target;
    let i = Array.from(String(target.value), Number);
    if (inputIsValid(i)) {
        let bitSequence = Array.from(String(i), Number);
        bitSequence = bitSequence.filter(function (value) {
            return !Number.isNaN(value);
        });
        bitSequence = bitSequence.reverse();
        bitSequence.splice(0, 0, 0);
        bitSequence.splice(1, 0, 0);
        bitSequence.splice(3, 0, 0);
        bitSequence.splice(7, 0, 0);
        let indices = new Array();
        for (let i = 0; i < bitSequence.length; i++) {
            if (bitSequence[i] == 1) {
                indices.push(i + 1);
            }
        }
        let result = indices
            .reduce(function (a, b) {
            return a ^ b;
        }, 0)
            .toString(2);
        result = ("0000" + result).slice(-4);
        bitSequence.splice(0, 1, Number(result.charAt(3)));
        bitSequence.splice(1, 1, Number(result.charAt(2)));
        bitSequence.splice(3, 1, Number(result.charAt(1)));
        bitSequence.splice(7, 1, Number(result.charAt(0)));
        let out = bitSequence.reverse().toString().replace(/,/g, "");
        output.innerText = "Output: " + out;
    }
}
// Helper functions for input validation
function inputIsValid(inputArray) {
    let input = +inputArray.join("");
    if (!isBinary(input) || isNaN(input)) {
        output.innerText =
            "Output: Invalid Input (Please enter zeros and ones only)";
        return false;
    }
    else if (getlength(inputArray) !== 7) {
        output.innerText = "Output: Invalid Input (Please enter 7 bits)";
        return false;
    }
    return true;
}
function getlength(inputArray) {
    return inputArray.length;
}
function isBinary(number) {
    const temp = number.toString();
    for (let c of Array.from(temp)) {
        if (c !== "0" && c !== "1") {
            return false;
        }
    }
    return true;
}
