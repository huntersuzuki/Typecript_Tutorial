// Here we used the optional "?" operator to tell typeScript that when calling,
// generateError function we will either send an error message or not.
function generateError(msg?: string) {
  throw new Error(msg);
}

generateError(); // No error // Before adding optional operator
// Expected 1 arguments, but got 0.
generateError("An error occurred"); // No Error

type User = {
  name: string;
  age: number;
  role?: "admin" | "guest"; // By adding optional "?" operator the role key
  // will either accept "admin","guest" or nothing.
};

// There is also another operator called the nullish coalescing where it checks
// if the value returned is either null or undefined
// Example -
let input = "";
// The "??" will not check for a falsy value but rather null or undefined, And
// return empty string "".
// Output - ""
const didProvideInput = input ?? false;
// The "//" logical "OR" will check for a falsy value and return false.
//Output - false
// const didProvideInput = input || false
