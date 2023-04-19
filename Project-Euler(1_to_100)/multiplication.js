// This is the First Program in Euler Series
// Multiplication

// This can be done in either normal function or an arrow function

function mult(a, b) {
    return a * b;
}

let value = (a, b) => a * b;
console.log("Using arrow function " + " " + value(3, 5));

let value2 = mult(10, 20);
console.log("While Using normal function" + " " + value2);

// multiple sum

function sum3(number) {
    let sum = 1, total = 1;
    for (let i = 0; i < number; i++) {
        if (total >= number) break;
        total = 3 ** i;
        sum += total;
    }
    return sum;
}

function sum5(number) {
    let sum = 1, total = 1;
    for (let i = 0; i < number; i++) {
        if (total >= number) break;
        total = 5 ** i
        sum += total;
    }
    return sum;
}

function multiplesOf3and5(number) {
    let a = sum3(number);
    let b = sum5(number);


    return a + b;
}

console.log(multiplesOf3and5(1000));