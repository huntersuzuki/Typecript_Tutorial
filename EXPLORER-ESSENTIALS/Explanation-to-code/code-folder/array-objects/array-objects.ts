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

//Types in objects

// let user = {
//   name: "Pranay",
//   age: 33,
// }; // Because we provided values by default to the object,typescript
// automatically infers the object type & in our case,
//let user: {
//     name: string;
//     age: number;
// } types automatically inferred by typescript.

// We can also explicitly assign types to objects.
//Example -

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Pranay",
  age: 23,
  hobbies: ["Kabaddi", "Gaming"],
  role: {
    description: "admin",
    id: 1,
  },
};

// One more types is used in typescript which is "{}".
// It stores any value except null or undefined.

//Example -

// let val: {} = undefined; //Type 'undefined' is not assignable to type '{}'.
// let val2: {} = null; //Type 'null' is not assignable to type '{}'.
// But it can store any value aside form null and undefined.

let val: {} = "pranay";
let vale: {} = [1, 2, "max"];
// etc.

// There is another type for objects so that we can assign what type should be our keys : objects.
// That type is called "Record" type which is a generic type used for Objects.
//Example -

let data: Record<string, number | string>;
// In this "Record<string, number | string>" type the first type defined the key and the second,
// defines the value.
data = {
  entry: 1,
  entry2: "2",
};
