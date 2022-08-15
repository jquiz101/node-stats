let ss = require("simple-statistics");

let numbers = [62, 60, 53, 9, 11, 14, 15, 16, 17, 65, 88];

const smallest = ss.min(numbers);
console.log("Smallest: " + smallest);

const largest = ss.max(numbers);
console.log("largest: " + largest);

const sumAll = ss.sumSimple(numbers);
console.log("sumAll: " + sumAll);

const avg = ss.mean(numbers);
console.log("avg: " + avg);