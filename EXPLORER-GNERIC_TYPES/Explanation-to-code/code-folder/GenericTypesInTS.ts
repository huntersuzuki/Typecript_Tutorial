// Here we are using normal or mostly used types which is "string[]".
let names: string[] = ["Pranay", "Bhoir"];

//Now there is another way of writing the same code as above using generic types.
let names1: Array<string> =
  // This is a generic type.
  ["Pranay", "Bhoir"];
// Generic types are nothing but combination of various types.
// Example "Array<string>" -> this type refers to a array with values full of strings.
//=================================================================================
// Define a generic type called 'dataStore'.
// The '<T>' means this type can be used with any type you specify later.
// The index signature '[key: string]: T;' allows you to add any number of properties with string keys,
// and the value for each property must be of type 'T'.
type dataStore<T> = {
  [key: string]: T;
};

// Here, we create an object 'storeDetail' using 'dataStore' with 'string | boolean' as the type argument.
// This means every property added to 'storeDetail' must have a value that is either a string or a boolean.
let storeDetail: dataStore<string | boolean> = {};

// Adding properties to 'storeDetail':
storeDetail.name = "DMart"; // OK: "DMart" is a string
storeDetail.isAvailable = true; // OK: true is a boolean

// Now, we create another object 'storeId' using 'dataStore' with 'number' as the type argument.
// This means every property added to 'storeId' must have a value of type number.
let storeId: dataStore<number> = {};

// Adding a property to 'storeId':
storeId.id = 3635; // OK: 3635 is a number

// In summary:
// - The 'dataStore' generic type allows you to create objects where all property values must be of a specific type (or union of types).
// - You specify the allowed type(s) when you use 'dataStore', making it flexible and reusable for different data shapes.
//================================================================================
// The following function 'merge' takes two arguments 'a' and 'b' of type 'any'.
// It returns a new array containing both 'a' and 'b'.
// Using 'any' means that TypeScript will not perform any type checking on the arguments or the return value.
function merge(a: any, b: any) {
  return [a, b];
}

// Example usage of 'merge':
const ids = merge(1, 2);
// Here, both arguments are numbers, so the result is [1, 2].
// However, because 'any' is used, you could also do merge(1, "hello") or merge(true, {}), and TypeScript would not complain.

// ---
// Now, let's look at a more type-safe version using generics:

// The function 'merge1' is a generic function. The '<T>' syntax means that 'merge1' can work with any type 'T'.
// Both parameters 'a' and 'b' must be of the same type 'T'.
// The function returns an array of type 'T[]', meaning an array where all elements are of type 'T'.
function merge1<T>(a: T, b: T) {
  return [a, b];
}

// Example usage of 'merge1':
const ids1 = merge1<number>(2, 4);
// Here, we explicitly specify that 'T' is 'number', so both arguments must be numbers.
// The result is a number array: [2, 4].

// If you try to call merge1<number>(2, "hello"), TypeScript will give an error because "hello" is not a number.

// In summary:
// - 'merge' is flexible but unsafe, as it allows any types and disables type checking.
// - 'merge1' uses generics to enforce that both arguments are of the same type, providing better type safety and catching errors at compile time.
//================================================================================
// The function 'merge2' is a generic function that takes two type parameters: T and U.
// This means 'a' can be of any type T, and 'b' can be of any type U (they can be different).
// The function returns an array containing both 'a' and 'b', so the return type is [T, U][] (an array with elements of type T or U).
function merge2<T, U>(a: T, b: U) {
  return [a, b];
}

// Example usage of 'merge2':
const ids2 = merge2(2, "Pranay");
// Here, the first argument is a number (2), and the second is a string ("Pranay").
// TypeScript infers T as 'number' and U as 'string', so the result is an array: [2, "Pranay"].

// In summary:
// - 'merge2' allows you to combine two values of potentially different types into an array.
// - The types of the arguments are preserved, providing flexibility and type safety.
//=================================================================================

// The function 'mergeObj' is a generic function designed to merge two objects into one.
// Let's break down how it works:

// 1. Generic Type Parameter with Constraint:
//    - <T extends object>: This means that the function is generic over type 'T', but 'T' must be an object type.
//    - This ensures that both parameters 'a' and 'b' are objects (not primitives like number or string).

function mergeObj<T extends object>(a: T, b: T) {
  // 2. Merging Objects:
  //    - The function uses the object spread operator ({ ...a, ...b }) to combine the properties of 'a' and 'b' into a new object.
  //    - If both 'a' and 'b' have properties with the same name, the value from 'b' will overwrite the value from 'a'.
  return { ...a, ...b };
}

// Example usage:
const merged = mergeObj({ userName: "Pranay" }, { age: 24 });
// - Here, the first argument is an object with a 'userName' property.
// - The second argument is an object with an 'age' property.
// - The result is a new object: { userName: "Pranay", age: 24 }

// Type Inference:
// - TypeScript infers the type 'T' as { userName: string } & { age: number }, so the merged object has both properties with correct types.

// In summary:
// - 'mergeObj' provides a type-safe way to merge two objects of the same type (or compatible types) into a single object.
// - The use of generics and the 'extends object' constraint ensures that only objects can be passed, preventing accidental misuse with non-object types.
//=================================================================================

// The function 'mergeObj1' is a generic function that merges two objects of potentially different types.
// - It takes two type parameters: T and U, both constrained to be objects (T extends object, U extends object).
// - The parameters 'a' and 'b' are of types T and U, respectively.
// - The function returns a new object that combines the properties of both 'a' and 'b' using the spread operator.
// - If there are overlapping property names, the value from 'b' will overwrite the value from 'a'.

function mergeObj1<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

// Example usage:
// - Here, the first argument is an object with a 'userName' property.
// - The second argument is an object with an 'age' property.
// - The result is a new object that has both properties: { userName: "Pranay", age: 25 }
// - TypeScript infers the return type as { userName: string } & { age: number }, so both properties are available with correct types.
// Example usage of mergeObj1:
// - We call mergeObj1 with two objects: the first has a 'userName' property, the second has an 'age' property.
// - TypeScript infers the types of these objects and merges them, resulting in an object with both properties.
// - The resulting object, mergeObj2, has the type: { userName: string } & { age: number }
const mergeObj2 = mergeObj1({ userName: "Pranay" }, { age: 25 });
//=================================================================================

// The following code demonstrates how to use generics in both classes and interfaces in TypeScript.

// 1. Generic Class: UserDetails<T>
//    - The class 'UserDetails' is defined with a generic type parameter 'T'.
//    - This means that when you create an instance of 'UserDetails', you can specify what type 'T' should be.
//    - The class has a single property, 'Id', whose type is 'T'.
//    - The constructor takes a value of type 'T' and assigns it to the 'Id' property.

class UserDetails<T> {
  constructor(public Id: T) {}
}

// Example usage:
// - Here, we create an instance of 'UserDetails' and specify that 'T' should be 'string'.
// - So, the 'Id' property will be of type 'string'.
const userDetails = new UserDetails("Pranay");

// Accessing the 'Id' property will give us a value of type 'string'.
userDetails.Id; // "Pranay"

// 2. Generic Interface: Role<T>
//    - The interface 'Role' is also defined with a generic type parameter 'T'.
//    - Both the 'name' and 'role' properties are of type 'T'.
//    - This allows you to create objects where the type of 'name' and 'role' can be specified when the interface is used.

interface Role<T> {
  name: T;
  role: T;
}

// Example usage:
// - You could create a Role where both 'name' and 'role' are strings:
//   const adminRole: Role<string> = { name: "Admin", role: "Administrator" };
// - Or, you could use another type, such as a number or a custom type, for more flexibility.

// In summary:
// - Generics allow you to write flexible and reusable code by parameterizing types.
// - Both the 'UserDetails' class and the 'Role' interface can work with any type specified at the time of use, making them highly adaptable.
