/*
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/


let min = (a, b) => {
    let val = Math.min(a, b);
    return val;
}

let val1 = process.argv[2];
let val2 = process.argv[3];

console.log(min(val1, val2));