var input = document === null || document === void 0 ? void 0 : document.getElementById("inputEncoder");
var output = document === null || document === void 0 ? void 0 : document.getElementById("outputEncoder");
input.addEventListener("input", encode);
function encode(e) {
    var target = e.target;
    var i = Array.from(String(target.value), Number);
    if (inputIsValid(i)) {
        var bitSequence = Array.from(String(i), Number);
        bitSequence = bitSequence.filter(function (value) {
            return !Number.isNaN(value);
        });
        bitSequence.splice(0, 0, 0);
        bitSequence.splice(1, 0, 0);
        bitSequence.splice(3, 0, 0);
        bitSequence.splice(7, 0, 0);
        var indices = new Array();
        for (var i_1 = 0; i_1 < bitSequence.length; i_1++) {
            if (bitSequence[i_1] == 1) {
                indices.push(i_1 + 1);
            }
        }
        var result = indices
            .reduce(function (a, b) {
            return a | b;
        }, 0)
            .toString(2);
        console.log(result);
        bitSequence.splice(0, 1, Number(result.charAt(0)));
        bitSequence.splice(1, 1, Number(result.charAt(1)));
        bitSequence.splice(3, 1, Number(result.charAt(2)));
        bitSequence.splice(7, 1, Number(result.charAt(3)));
        var out = bitSequence.toString().replace(/,/g, "");
        output.innerText = "Output: " + out;
    }
}
// Helper functions for input validation
function inputIsValid(inputArray) {
    var input = +inputArray.join("");
    if (!isBinary(input) || isNaN(input)) {
        console.log(input);
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
    var temp = number.toString();
    for (var _i = 0, _a = Array.from(temp); _i < _a.length; _i++) {
        var c = _a[_i];
        if (c !== "0" && c !== "1") {
            return false;
        }
    }
    return true;
}
