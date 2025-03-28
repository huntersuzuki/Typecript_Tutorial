// In typescript we add types to parameters of the function, we can also add
// type to function return type.
function add(a: number, b: number): number {
  // Return type number
  return a + b; // returning number
  //   return "a" + "b"; // Error "Type 'string' is not assignable to type 'number'."
}

// There is another  type for functions called "void" , which does not return
// anything
// Example -

function message(msg: string): void {
  // in this function there is no return, statement because it doesn't return anything and the return type is "void"
  console.log(msg);
}

// In TypeScript, the never return type is used to indicate that a function never successfully completes. This means the function either:

// Throws an error (like in your example).
// Goes into an infinite loop (never returns control to the caller).
// Why Use never?
// The never type is a way for TypeScript to enforce that certain code paths are unreachable or that a function is not supposed to return a value under any circumstances. It helps with type safety and ensures that developers handle all possible cases in their code.

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}
/*
 * The function logs the error message to the console.
 *Then it throws an error using throw new Error(errorMessage);.
 * Since the throw statement immediately stops the function's execution and transfers control to the nearest error handler, the function never returns to the caller. This is why the return type is never.
 */

// TypeScript also has another type for function which is a function.
// What it means is that a function can be a type for another function.
// Example -

function performJob(callBack: (m: string) => void) {
  //....
  callBack("Job done");
}
// In the performJob function it takes an parameter which is a function itself,
// named callBack which is called by the performJob function.
performJob(message);
// when calling the performJob function it takes a function called message,
// as a parameter.

// This is how a function can be a type of another function.

// Using function type in an object
// Example -

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: "Pranay",
  age: 24,
  greet() {
    console.log("Hello there");
    return this.name;
  },
};
user.greet();
