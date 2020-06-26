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
function varProduct (a, b, c) {

    if (c) {
        console.log(`multiplying ${a}, ${b}, and ${c}`)
    }
    if (b && !c) {
        c = 1
        console.log(`multiplying ${a} and ${b}`)
    }
    if (!b) {
        return "please provide at least 2 numbers to multiply"
    }
    return a*b*c
}
console.log(varProduct());
console.log(varProduct(2));
console.log(varProduct(2, 10));
console.log(varProduct(2, 10, 100));

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