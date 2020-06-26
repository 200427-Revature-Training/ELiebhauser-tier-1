//Problem A
function dataType(x) {
    type = typeof(x);
    return type;
}
let newNum = 5
let newString = "stringystring"

console.log(`The type of ${newNum} is ${dataType(newNum)}`);
console.log(`The type of ${newString} is ${dataType(newString)}`);

//Problem B
function varProduct (...array) {
    return array.reduce((a, b) => {
        return a * b;
    });   
}
console.log(varProduct (2));
console.log(varProduct (2, 2));
console.log(varProduct (2, 2, 2));
console.log(varProduct (2, 2, 2, 2));

//Problem C
function arraySum(x) {
    let cumulativeSum = 0;
    let i=0
    while (i < x.length) {
        cumulativeSum = cumulativeSum+ x[i];
        i++;
        console.log(`on loop ${i}, the running total was ${cumulativeSum}`);
    }
    return cumulativeSum
}
myArray = [1, 2, 6];
console.log(arraySum(myArray));

function parameterTest(...array) {
    console.log(a,b);
}

parameterTest(1, 2);
parameterTest(1); // Any variable not present is considered undefined
parameterTest(1, 2, 3);
// The rest operator gathers extra values into an array
parameterTest(1, 2, 3, 4, 5, 6, 7);