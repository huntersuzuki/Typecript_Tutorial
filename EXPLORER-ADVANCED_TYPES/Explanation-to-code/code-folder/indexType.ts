// This code demonstrates how to use TypeScript's index signatures and utility types
// to enforce that all properties of an object have values of specific types (number or boolean).

// Define a type called DataStore using an index signature.
// The [prop: string]: number | boolean; part means:
// - Any property with a string key is allowed.
// - The value for each property must be either a number or a boolean.
type DataStore = {
  [prop: string]: number | boolean;
};

// Create an object 'store' of type DataStore.
// Initially, it's empty, but you can add properties later.
let store: DataStore = {};

// Assigning values to properties of 'store'.
// These assignments are allowed because the values are of type number or boolean.
store.id = 3;         // OK: 3 is a number
store.open = false;   // OK: false is a boolean

// The following line would cause a TypeScript error if uncommented,
// because "Pranay" is a string, which is not allowed by the DataStore type.
// store.name = "Pranay"; // Error: Type 'string' is not assignable to type 'number | boolean'.

// ---
// Alternative approach using the built-in Record utility type:

// Record<string, number | boolean> creates a type where:
// - All string keys are allowed.
// - All values must be number or boolean (just like our DataStore type).
let someObj: Record<string, number | boolean> = {};

// Assigning values to properties of 'someObj'.
// These are valid for the same reason as above.
someObj.id = 12;      // OK: 12 is a number
someObj.open = true;  // OK: true is a boolean

// In summary:
// - Both DataStore and Record<string, number | boolean> enforce that all property values
//   must be either a number or a boolean.
// - Attempting to assign a value of any other type (like a string) will result in a TypeScript error.
