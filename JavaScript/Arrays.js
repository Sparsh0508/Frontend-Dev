
// 1. Creating arrays
let fruits = ["apple", "banana", "mango"]; 
let numbers = new Array(10, 20, 30, 40);

// 2. Accessing elements
console.log(fruits[0]); // apple
console.log(fruits[2]); // mango

// 3. Modifying elements
numbers[1] = 50;
console.log(numbers); // [10, 50, 30, 40]

// 4. Adding elements
fruits.push("orange");       // Add at end
fruits.unshift("pineapple"); // Add at start
console.log(fruits);

// 5. Removing elements
fruits.pop();   // removes last
fruits.shift(); // removes first
console.log(fruits);

// 6. Looping through array
let colors = ["red", "green", "blue"];
colors.forEach(color => console.log(color));

// 7. Map example - double numbers
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
console.log(doubled);

// 8. Filter example - even numbers
let even = nums.filter(n => n % 2 === 0);
console.log(even);

// 9. Reduce example - sum of array
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);

// 10. Check if variable is array
console.log(Array.isArray(nums));