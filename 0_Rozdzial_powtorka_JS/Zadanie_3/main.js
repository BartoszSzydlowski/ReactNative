const numbers = [1, 1000, 101, 11];

function compareNumbers(a, b) {
   return a - b;
}

const arrowCompareNumbers = (a, b) => a - b;

console.log(numbers.sort(arrowCompareNumbers))