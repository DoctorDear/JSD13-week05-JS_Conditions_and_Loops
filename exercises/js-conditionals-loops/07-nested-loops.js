// Exercise 07 — nested loops
// --------------------------
// Implement rectangle(width, height): return a string of '*' characters shaped
// as a filled rectangle. Each row has `width` stars, there are `height` rows,
// and rows are separated by a newline "\n" (no trailing newline at the end).
//
// Example: rectangle(3, 2) returns:
//   "***\n***"
// which prints as:
//   ***
//   ***
//
// If width or height is less than 1, return an empty string "".
// Use one loop for the rows and a nested loop (or repetition) for the columns.

function rectangle(width, height) {
  // TODO: replace this with your implementation
  if (width < 1 || height < 1){
	return "";
  }
// String Accumulator
//   let line = "";
//   for (let y = 0; y < height; y++) {
// 	for (let x = 0; x < width; x++){
// 		line += "*";
// 	}
// 	if (y < height -1){
// 		line += "\n";
// 	}
// 	}
//   return line;
// }

// Array Accumulator & Join Method
  let line = [];
  for (let y = 0; y < height; y++) {
	let currentLine = "";
	for (let x = 0; x < width; x++) {
		currentLine += "*"
	}	
	line.push(currentLine);
	}
	return line.join("\n");
}

// console.log(rectangle(3, 2), "***\n***");

// --- Tests (do not edit) ---
import { strictEqual } from "node:assert";

strictEqual(rectangle(3, 2), "***\n***");
strictEqual(rectangle(1, 1), "*");
strictEqual(rectangle(4, 3), "****\n****\n****");
strictEqual(rectangle(0, 5), "");
strictEqual(rectangle(2, 0), "");

console.log("All tests passed ✅");
