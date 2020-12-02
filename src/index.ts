const ones: string[] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens: string[] = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens: string[] = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

export function convertNumberToEnglishText(n: number): string {
    const nr: string = n.toString();
    const arr: string[] = nr.split('');
    let neg: string = '';
    let res: string = '';
    let i: number;
    let th: boolean = false;

    arr[0] == '-' ? ( neg = 'negative ', arr.shift() ) : false;
    if (arr.length > 5) return res = 'bad number!'; // number out of range (-99999 - 99999)
    if (arr.length >= 4) th = true; // thousands

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

    const resArr: string[] = res.split(' ');
    const newArr: string[] = [];

    for (i = 0; i < resArr.length; i++) {
        // remove blank spaces
        if (resArr[i]) {
        newArr.push(resArr[i]);
      }
    }
    return neg + newArr.join(' ');
}

// -99999 - 99999
const nr: number = -10000;
const result: string = convertNumberToEnglishText(nr);

console.log(result);