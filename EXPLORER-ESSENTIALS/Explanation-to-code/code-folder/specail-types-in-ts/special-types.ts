// This is one of the special types in typescript which we can assign

let data: null; // The "data" variable will only accept null values and no other value
// data = "hii"; // Error - "Type '"hii"' is not assignable to type 'null'."
data = null;

// But instead of just using null we can union the types so that it will not
// only accept null bu also some other types
// Example -

let user: null | string; //  here we made a union of null and string type
// thus our "user" variable can accept null or string
user = "max";
user = null;
// In special types we can also assign undefined types to a variable.
