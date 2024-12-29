function foo(a, b) {
  // Use nullish coalescing operator to handle null values
  const aValue = a ?? 0; 
  const bValue = b ?? 0;
  return aValue + bValue;
}
console.log(foo(1, null)); // Output: 1
console.log(foo(null, 1)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, null)); // Output: 0