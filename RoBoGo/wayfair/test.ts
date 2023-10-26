/*
We are working on a security system for a badged-access room in our company's building.

We want to find employees who badged into our secured room unusually often. We have an unordered list of names and entry times over a single day. Access times are given as numbers up to four digits in length using 24-hour time, such as "800" or "2250".

Write a function that finds anyone who badged into the room three or more times in a one-hour period. Your function should return each of the employees who fit that criteria, plus the times that they badged in during the one-hour period. If there are multiple one-hour periods where this was true for an employee, just return the earliest one for that employee.

badge_times = [
  ["Paul",      "1355"], ["Jennifer",  "1910"], ["Jose",    "835"],
  ["Jose",       "830"], ["Paul",      "1315"], ["Chloe",     "0"],
  ["Chloe",     "1910"], ["Jose",      "1615"], ["Jose",   "1640"],
  ["Paul",      "1405"], ["Jose",       "855"], ["Jose",    "930"],
  ["Jose",       "915"], ["Jose",       "730"], ["Jose",    "940"],
  ["Jennifer",  "1335"], ["Jennifer",   "730"], ["Jose",   "1630"],
  ["Jennifer",     "5"], ["Chloe",     "1909"], ["Zhang",     "1"],
  ["Zhang",       "10"], ["Zhang",      "109"], ["Zhang",   "110"],
  ["Amos",         "1"], ["Amos",         "2"], ["Amos",    "400"],
  ["Amos",       "500"], ["Amos",       "503"], ["Amos",    "504"],
  ["Amos",       "601"], ["Amos",       "602"], ["Paul",   "1416"],
];

Expected output (in any order)
   Paul: 1315 1355 1405
   Jose: 830 835 855 915 930
   Zhang: 10 109 110
   Amos: 500 503 504

n: length of the badge records array


 */


const badge_records: any = [
    ["Paul", "1355"],
    ["Jennifer", "1910"],
    ["Jose", "835"],
    ["Jose", "830"],
    ["Paul", "1315"],
    ["Chloe", "0"],
    ["Chloe", "1910"],
    ["Jose", "1615"],
    ["Jose", "1640"],
    ["Paul", "1405"],
    ["Jose", "855"],
    ["Jose", "930"],
    ["Jose", "915"],
    ["Jose", "730"],
    ["Jose", "940"],
    ["Jennifer", "1335"],
    ["Jennifer", "730"],
    ["Jose", "1630"],
    ["Jennifer", "5"],
    ["Chloe", "1909"],
    ["Zhang", "1"],
    ["Zhang", "10"],
    ["Zhang", "109"],
    ["Zhang", "110"],
    ["Amos", "1"],
    ["Amos", "2"],
    ["Amos", "400"],
    ["Amos", "500"],
    ["Amos", "503"],
    ["Amos", "504"],
    ["Amos", "601"],
    ["Amos", "602"],
    ["Paul", "1416"],
];


function userBadgeRecords(badge_records: []) {

    let employeeEntryRecord: any = {};

    let finalOutput: any = {}

    for (let br of badge_records) {
        console.log(br);
        if (br[0] in employeeEntryRecord) {
            let record = employeeEntryRecord[br[0]];
            record.push(parseInt(br[1]));
            employeeEntryRecord[br[0]] = record;
        } else {
            employeeEntryRecord[br[0]] = [parseInt(br[1])]
        }
    }

    for (let er in employeeEntryRecord) {

        if (employeeEntryRecord[er].length >= 3) {
            let entryData: number[] = employeeEntryRecord[er].sort((a: number, b: number) => a - b);

            let stack: number[] = [];
            let output: number[][] = [];

            for (let j = 0; j < entryData.length; j++) {
                let current = entryData[j];
                stack = [];
                for (let d = j; d < entryData.length; d++) {

                    if (entryData[d] - current <= 100) {
                        stack.push(entryData[d]);
                    } else {
                        break;
                    }
                }
                if (stack.length >= 3) {
                    output.push(stack);
                }
            }
            finalOutput[er] = output;
        }
    }

    console.log(employeeEntryRecord);
    console.log(finalOutput);
}

userBadgeRecords(badge_records);