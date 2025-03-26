// Here we will be exploring enums in typescript.
// Example -

// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }
// Enum is a typescript feature where we can create keywords just like in the,
// above code for various purpose.
// By using enums in typescript we can use these enum keyword as choices for
// our code
// let userRole = Role.Admin;
// userRole = Role.Guest;
// userRole = Role.Editor;

// Because enums is not vanilla javascript feature type script creates a work
// around for our code when compiled to java script

/*
  var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));

var userRole = Role.Admin;
userRole = Role.Guest;
userRole = Role.Editor;
*/

// There is also a more popular way to write enums.
//Example -

let userRole: "admin" | "editor" | "guest" | "user" = "admin";

userRole = "editor";

// Example 2 -

let possibleResults: [1 | -1, 1 | -1];

possibleResults = [1, 1]; // Because of this either 1 or -1 will be accepted,
// no other values will be accepted.

// possibleResults = [2, -1];// Error "Type '2' is not assignable to type '1 | -1'."

// Lets learn about type aliases where you can create a custom type with the,
// "type" keyword.

//Example -

type Role = "admin" | "editor" | "guest" | "user"; // We can use the type Role,
// for our variables and because of this we can now store multiple types in a
// variable(It's not a variable but has a similar functionality as a variable.)

// now we can user "Role" as a type.
// Example -

let userrole: Role = "admin";

// Also we can use this type in function parameter
function userRoleAuth(role: Role) {
  //.....
}
