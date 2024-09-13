









function reversestring(str) {
    return str.split('').reverse().join('');
}
const inputString = "Hello, World!";
const reversedString = reversestring(inputString);
console.log(reversedString);  // Output: !dlroW ,olleH
// 
// 
function factorial(num) {
    if (num < 0) {
        return undefined;
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
const inputNumber = 5;
const result = factorial(inputNumber);
console.log(result); // Output: 120
// 
// 
function mergeObjects(obj1, obj2) {
    const merged = { ...obj1, ...obj2 };
    return merged;
}
const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 4, c: 5, d: 6 };
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); // Output: { a: 1, b: 4, c: 5, d: 6 }
// 
// 
function toggleBoolean(bool) {
    return !bool;
}
const initialValue = true;
const toggledValue = toggleBoolean(initialValue);
console.log(toggledValue); // Output: false