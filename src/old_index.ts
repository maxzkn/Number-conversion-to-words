const ones: string[] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens: string[] = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens: string[] = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

export function convertNumberToEnglishText(n: number): string {
    const nr: string = n.toString();
    const arr: string[] = nr.split('');
    let neg: string = '';
    arr[0] == '-' ? ( neg = 'negative ', arr.shift() ) : false;
    const len: number = arr.length;
    // 0 - 9
    if (len == 1) {
        return neg + ones[parseInt(arr[0])];
    };
    // 10 - 99
    if (len == 2) {
        // 10 - 90
        if (arr[1] == '0') {
            return neg + tens[parseInt(arr[0]) - 1];
        }
        // 11 - 19
        else if (arr[0] == '1') {
            return neg + teens[parseInt(arr[1]) - 1];
        }
        // 21 - 99
        else {
            return neg + tens[parseInt(arr[0]) - 1] + ' ' + ones[parseInt(arr[1])];
        }
    }
    // 100 - 999
    if (len == 3) {
        const x_hundred = ones[parseInt(arr[0])] + ' hundred';
        // 100 - 900
        if (arr[1] == '0' && arr[2] == '0') {
            return neg + x_hundred;
        }
        // 101 - 909
        else if (arr[1] == '0') {
            return neg + x_hundred + ' ' + ones[parseInt(arr[2])];
        }
        // 110 - 190
        else if (arr[2] == '0') {
            // 110 - 190
            return neg + x_hundred + ' ' + tens[parseInt(arr[1]) - 1];
        }
        // 111 - 999
        else {
            if (arr[1] == '1') {
                return neg + x_hundred + ' ' + teens[parseInt(arr[2]) - 1];
            } else {
                return neg + x_hundred + ' ' + tens[parseInt(arr[1]) - 1] + ' ' + ones[parseInt(arr[2])];
            }
        }
    }
    // 1000 - 9999
    if (len == 4) {
        const x_thousand = ones[parseInt(arr[0])] + ' thousand';
        const x_hundred = ones[parseInt(arr[1])] + ' hundred';
        // 1000 - 9000
        if (arr[1] == '0' && arr[2] == '0' && arr[3] == '0') {
            return neg + x_thousand;
        }
        // 1001 - 9009
        else if (arr[1] == '0' && arr[2] == '0') {
            return neg + x_thousand + ' ' + ones[parseInt(arr[3])];
        }
        // 1010 - 9090
        else if (arr[1] == '0' && arr[3] == '0') {
            return neg + x_thousand + ' ' + tens[parseInt(arr[2]) - 1];
        }
        // 1011 - 9099
        else if (arr[1] == '0') {
            // 1011 - 9019
            if (arr[2] == '1') {
                return neg + x_thousand + ' ' + teens[parseInt(arr[2]) - 1];
            } else {
                // 1021 - 9099
                return neg + x_thousand + ' ' + tens[parseInt(arr[2]) - 1] + ' ' + ones[parseInt(arr[2])];
            }
        }
        // 1100 - 9900
        else if (arr[2] == '0' && arr[3] == '0') {
            return neg + x_thousand + ' ' + x_hundred;
        }
        // 1101 - 9909
        else if (arr[2] == '0') {
            return neg + x_thousand + ' ' + x_hundred + ' ' + ones[parseInt(arr[3])];
        }
        // 1110 - 9990
        else if (arr[3] == '0') {
            // 1110 - 9990
            return neg + x_thousand + ' ' + x_hundred + ' ' + tens[parseInt(arr[2]) - 1];
        }
        // 1111 - 9999
        else {
            if (arr[2] == '1') {
                return neg + x_thousand + ' ' + x_hundred + ' ' + teens[parseInt(arr[3]) - 1];
            } else {
                return neg + x_thousand + ' ' + x_hundred + ' ' + tens[parseInt(arr[2]) - 1] + ' ' + ones[parseInt(arr[3])];
            }
        }
    }
    // 10000 - 99999
    if (len == 5) {
        const x_thousand = tens[parseInt(arr[0]) - 1] + ' thousand';
        const x_hundred = ones[parseInt(arr[2])] + ' hundred';
        // 10000 - 90000
        if (arr[1] == '0' && arr[2] == '0' && arr[3] == '0' && arr[4] == '0') {
            return neg + x_thousand;
        }
        // 10001 - 90009
        else if (arr[1] == '0' && arr[2] == '0' && arr[3] == '0') {
            return neg + x_thousand + ' ' + ones[parseInt(arr[4])];
        }
        // 10010 - 90090
        else if (arr[1] == '0' && arr[2] == '0' && arr[4] == '0') {
            return neg + x_thousand + ' ' + tens[parseInt(arr[3]) - 1];
        }
        // 10011 - 90099
        else if (arr[1] == '0' && arr[2] == '0') {
            // 10011 - 90019
            if (arr[3] == '1') {
                return neg + x_thousand + ' ' + teens[parseInt(arr[4]) - 1];
            } else {
                // 10021 - 90099
                return neg + x_thousand + ' ' + tens[parseInt(arr[3]) - 1] + ' ' + ones[parseInt(arr[4])];
            }
        }
        // 10100 - 90900
        else if (arr[1] == '0' && arr[3] == '0' && arr[4] == '0') {
            return neg + x_thousand + ' ' + x_hundred;
        }
        // 10101 - 90909
        else if (arr[1] == '0' && arr[3] == '0') {
            return neg + x_thousand + ' ' + x_hundred + ' ' + ones[parseInt(arr[4])];
        }
        // 10110 - 90990
        else if (arr[1] == '0' && arr[4] == '0') {
            return neg + x_thousand + ' ' + x_hundred + ' ' + tens[parseInt(arr[3]) - 1];
        }
        // 10111 - 90999
        else if (arr[1] == '0') {
            // 10111 - 90919
            if (arr[3] == '1') {
                return neg + x_thousand + ' ' + x_hundred + ' ' + teens[parseInt(arr[4]) - 1];
            } else {
                // 10121 - 90999
                return neg + x_thousand + ' ' + x_hundred + ' ' + tens[parseInt(arr[3]) - 1] + ' ' + ones[parseInt(arr[4])];
            }
        }
        // 11000 - 99000
        else if (arr[2] == '0' && arr[3] == '0' && arr[4] == '0') {
            // 11000 - 19000
            if (arr[0] == '1') {
                return neg + teens[parseInt(arr[1]) - 1] + ' thousand';
            } else {
                // 21000 - 99000
                return neg + tens[parseInt(arr[0]) - 1] + ' ' + ones[parseInt(arr[1])] + ' thousand';
            }
        }
        // 11001 - 99009
        else if (arr[2] == '0' && arr[3] == '0') {
            // 11001 - 19009
            if (arr[0] == '1') {
                return neg + teens[parseInt(arr[1]) - 1] + ' thousand ' + ones[parseInt(arr[4])];
            } else {
                // 21001 - 99009
                return neg + tens[parseInt(arr[0]) - 1] + ' ' + ones[parseInt(arr[1])] + ' thousand ' + ones[parseInt(arr[4])];
            }
        }
        // 11010 - 99090
        else if (arr[2] == '0' && arr[4] == '0') {
            // 11010 - 19090
            if (arr[0] == '1') {
                return neg + teens[parseInt(arr[1]) - 1] + ' thousand ' + tens[parseInt(arr[3]) - 1];
            } else {
                // 21010 - 99090
                return neg + tens[parseInt(arr[0]) - 1] + ' ' + ones[parseInt(arr[1])] + ' thousand ' + tens[parseInt(arr[3]) - 1];
            }
        }
        // 11011 - 99099
        else if (arr[2] == '0') {
            // 11011 - 19019
            if (arr[0] == '1') {
                return neg + teens[parseInt(arr[1]) - 1] + ' thousand ' + teens[parseInt(arr[4]) - 1];
            } else {
                // 21011 - 99019
                if (arr[3] == '1') {
                    return neg + tens[parseInt(arr[0]) - 1] + ' ' + ones[parseInt(arr[1])] + ' thousand ' + teens[parseInt(arr[4]) - 1];
                } else {
                    // 21021 - 99099
                    return neg + tens[parseInt(arr[0]) - 1] + ' ' + ones[parseInt(arr[1])] + ' thousand ' + tens[parseInt(arr[3]) - 1] + ' ' + ones[parseInt(arr[4])];
                }
            }
        }
        // 11100 - 99900
        else if (arr[3] == '0' && arr[4] == '0') {
            // 11100 - 19900
            if (arr[0] == '1') {
                return neg + teens[parseInt(arr[1]) - 1] + ' thousand ' + x_hundred;
            } else {
                // 21100 - 99900
                return neg + tens[parseInt(arr[0]) - 1] + ' ' + ones[parseInt(arr[1])] + ' thousand ' + x_hundred;
            }
        }
        // 11101 - 99909
        else if (arr[3] == '0') {
            // 11101 - 19909
            if (arr[0] == '1') {
                return neg + teens[parseInt(arr[1]) - 1] + ' thousand ' + x_hundred + ' ' + ones[parseInt(arr[4])];
            } else {
                // 21101 - 99909
                return neg + tens[parseInt(arr[0]) - 1] + ' ' + ones[parseInt(arr[1])] + ' thousand ' + x_hundred + ' ' + ones[parseInt(arr[4])];
            }
        }
        // 11110 - 99990
        else if (arr[4] == '0') {
            // 11110 - 19990
            if (arr[0] == '1') {
                return neg + teens[parseInt(arr[1]) - 1] + ' thousand ' + x_hundred + ' ' + tens[parseInt(arr[3]) - 1];
            } else {
                // 21110 - 99990
                return neg + tens[parseInt(arr[0]) - 1] + ' ' + ones[parseInt(arr[1])] + ' thousand ' + x_hundred + ' ' + tens[parseInt(arr[3]) - 1];
            }
        }
        // 11111 - 99999
        else {
            // 11111 - 19919
            if (arr[0] == '1') {
                return neg + teens[parseInt(arr[1]) - 1] + ' thousand ' + x_hundred + ' ' + teens[parseInt(arr[4]) - 1];
            }
            // 21111 - 99919
            else if (arr[3] == '1') {
                return neg + tens[parseInt(arr[0]) - 1] + ' ' + ones[parseInt(arr[1])] + ' thousand ' + x_hundred + ' ' + teens[parseInt(arr[4]) - 1];
            }
            // 21121 - 99999
            else {
                return neg + tens[parseInt(arr[0]) - 1] + ' ' + ones[parseInt(arr[1])] + ' thousand ' + x_hundred + ' ' + tens[parseInt(arr[3]) - 1] + ' ' + ones[parseInt(arr[4])];
            }
        }
    }
    // not ones number or number out of range (-99999 - 99999)
    return 'bad number!';
}

// -99999 - 99999
const nr: number = 55511;
const result: string = convertNumberToEnglishText(nr);

console.log(result);