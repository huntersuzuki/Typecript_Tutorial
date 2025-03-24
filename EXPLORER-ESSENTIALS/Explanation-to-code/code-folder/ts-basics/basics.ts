let userName: string; // this is a variable type a typescript feature.
// with this feature we can make sure that a specific type of value is being
// assigned to the variable.
userName = "Pranay Bhoir"; // for type string only string value is allowed.

// types are also used in functions which are very important
//Example -

function add(a: number, b: number) {
  return a + b;
}

add(10, 33); // only integers/numbers can be the argument values
//add("10","5") // this results in a type error.
