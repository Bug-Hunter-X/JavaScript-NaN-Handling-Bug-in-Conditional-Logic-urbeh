function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  if (x === undefined) {
    return 1; // Handle undefined case
  }
  return x + 1; // Normal case
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 1
console.log(foo(5)); // Output: 6
console.log(foo(NaN)); // Output: NaN + 1 = NaN