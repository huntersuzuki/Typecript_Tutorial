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
let userRole = Role.Admin;
userRole = Role.Guest;
userRole = Role.Editor;

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