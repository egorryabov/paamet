function processValue(value: string | number): string | number {
  if (typeof value === 'number') {
    // If the value is a number, perform a calculation
    return value * 10;
  } else {
    // If the value is a string, convert to uppercase
    return value.toUpperCase();
  }
}

// Usage
let result: string | number;

// Example with a number
result = processValue(10);
console.log(result); // Output: 100

// Example with a string
result = processValue('hello');
console.log(result); // Output: 'HELLO'
