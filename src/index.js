"use strict";
exports.__esModule = true;
exports.convertNumberToEnglishText = void 0;
var ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
function convertNumberToEnglishText(n) {
    var nr = n.toString();
    var arr = nr.split('');
    var neg = '';
    var res = '';
    var i;
    var th = false;
    arr[0] == '-' ? (neg = 'negative ', arr.shift()) : false;
    if (arr.length > 5)
        return res = 'bad number!'; // number out of range (-99999 - 99999)
    if (arr.length >= 4)
        th = true; // thousand
    for (i = 0; i < arr.length; i++) {
        // ex. 10 000 or 10
        if ((arr.length - i) % 3 == 2) {
            // 10 - 19
            if (arr[i] == '1') {
                res += teens[parseInt(arr[i + 1])];
            }
            // 20 - 90
            else if (arr[i] != '0') {
                res += tens[parseInt(arr[i]) - 2] + ' ';
            }
        }
        else if (arr[i] != '0') {
            if (arr[i - 1] != '1' || (arr.length == 4 && i == 1)) {
                res += ones[parseInt(arr[i])];
            }
        }
        // ex. 100
        if ((arr.length - i) % 3 == 0) {
            if (arr[i] != '0') {
                res += ' hundred ';
            }
        }
        // ex. 1 000 or 10 000 or 0
        if ((arr.length - i) % 3 == 1) {
            if (th && i != arr.length - 1) {
                res += ' thousand ';
            }
            if (arr.length == 1 && arr[0] == '0') {
                res = ones[0];
            }
        }
    }
    var resArr = res.split(' ');
    var newArr = [];
    for (i = 0; i < resArr.length; i++) {
        // remove blank spaces
        if (resArr[i]) {
            newArr.push(resArr[i]);
        }
    }
    return neg + newArr.join(' ');
}
exports.convertNumberToEnglishText = convertNumberToEnglishText;
// -99999 - 99999
var nr = -10000;
var result = convertNumberToEnglishText(nr);
console.log(result);
