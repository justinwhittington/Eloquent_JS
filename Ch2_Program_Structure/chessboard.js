/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

let size = process.argv[2];

let trigger = false;

for (let row = 1; row <= size; row++) {
  let grid = "";
  for (let q = 1; q <= size; q++) {
    if (row % 2 === 0) {
      grid += " #";
    } else {
      grid += "# ";
    }
  }
  console.log(grid)
  
}
