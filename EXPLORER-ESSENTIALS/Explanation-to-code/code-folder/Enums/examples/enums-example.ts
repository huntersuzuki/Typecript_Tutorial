// This file demonstrates the use of enums in TypeScript.

enum Role {
    Admin,
    Editor,
    Guest,
}

// Function to display user role
function displayUserRole(role: Role): string {
    switch (role) {
        case Role.Admin:
            return "User is an Admin.";
        case Role.Editor:
            return "User is an Editor.";
        case Role.Guest:
            return "User is a Guest.";
        default:
            return "Unknown role.";
    }
}

// Example usage
let userRole: Role = Role.Editor;
console.log(displayUserRole(userRole)); // Output: User is an Editor.