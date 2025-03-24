let age: any = 24;
// "any" type is a explicitly flexible type assignment in typescript where,
// if defined a variable can store any king of values such as string,number,boolean,etc.
//Example -
age = "24"; // String can also be stored in the "age" variable with "any" type
age = false; // Boolean can also be stored.
age = {}; // An object can also be stored.
age = []; // An array can also be stored.
// The "any" type can used to store any kind of values to the variable but it,
// defeats the purpose of TypeScript.

// If we want more flexibility instead of using any type we can use union where we can assign,
// more types to a variable
//Example -

let score: number | string; // the "|" sign is an symbol for union where we can assign more types, to a variable.

score = 32 // No errors because type "number" is assigned.
score = "45" // No errors because type "string" is assigned.
// score = false // Will give an error because type "boolean" is not assigned.
// score = {} //Error
// score = [] // Error
