let hobbies = ["Gaming", "Cooking"]; // Typescript has inferred that the hobbies variable is as ,
// String and if we try to push a value with different type, it will not allow it.
//Example -
//hobbies.push(10)//Error "Argument of type 'number' is not assignable to parameter of type 'string'."

// let users: (string | number)[]; // Because we are using union, now we can push string or number,
//values into the array of users
//Example -
let users: Array<string | number>; // This is an alternative way to assign types to a array,
// This way is called generic types.
users = ["Pranay", 22]; // No type Error
users = ["Pranay", "Bhoir"]; // No type Error
users = [10, 20]; // No type Error

// Tuples in TypeScript

let possibleResults: [number, number]; // This is called a tuple, it's used when you want to assign,
// fixed length and types to an array. Now only two values will be accepted in the array.
//Example -

possibleResults = [1, -1]; // Fixed length of two. No error.
//possibleResults = [10, 20, 30]; // Exceeds length of two. Error "Type '[number, number, number]' is not assignable to type '[number, number]'."Source has 3 element(s) but target allows only 2. "
