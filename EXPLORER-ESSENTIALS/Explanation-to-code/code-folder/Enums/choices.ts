// Here we will be exploring enums in typescript.
// Example -

enum Role {
  Admin,
  Editor,
  Guest,
}
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
