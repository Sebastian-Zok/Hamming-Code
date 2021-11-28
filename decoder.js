import { greet } from "./pkg/Hamming_Code.js";

var input = document === null || document === void 0 ? void 0 : document.getElementById("inputDecoder");
var output = document === null || document === void 0 ? void 0 : document.getElementById("outputDecoder");
input.addEventListener("input", decode);

function decode(e) {
    var target = e.target;
    var i = Array.from(String(target.value), Number);
    if (inputIsValid(i)) {
        var bitSequence = Array.from(String(i), Number);

        bitSequence = bitSequence.filter(x => !Number.isNaN(x))
        var out = bitSequence.toString().replace(/,/g, "");
        console.log(out);

        greet(out);
        output.innerText = "";
    }
}

function removeNull(array) {
    return array.filter(x => x !== null)
};

// Helper functions for input validation
function inputIsValid(inputArray) {
    var input = +inputArray.join("");
    if (!isBinary(input) || isNaN(input)) {
        console.log(input);
        output.innerText =
            "Invalid Input (Please enter zeros and ones only)";
        return false;
    } else if (getlength(inputArray) !== 11) {
        output.innerText = "Invalid Input (Please enter 11 bits)";
        return false;
    }
    return true;
}

function getlength(inputArray) {
    return inputArray.length;
}

function isBinary(number) {
    var temp = number.toString();
    for (var _i = 0, _a = Array.from(temp); _i < _a.length; _i++) {
        var c = _a[_i];
        if (c !== "0" && c !== "1") {
            return false;
        }
    }
    return true;
}