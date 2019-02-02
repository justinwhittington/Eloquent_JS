/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3
*/


let input = process.argv[2];
let block = "";


if (!Number(input)) {
    console.log("Not a number. Try again.");
} else {
    input = Number(input);
}

for (let i = 0; i < input; i++) {
    block += "#";
    console.log(block);
}
