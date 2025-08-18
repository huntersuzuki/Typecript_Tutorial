// The following line creates a tuple with three string elements: "admin", "guest", and "editor".
// The 'as const' assertion tells TypeScript to treat this array as a readonly tuple of literal types,
// meaning the type of 'roles' is 'readonly ["admin", "guest", "editor"]'.
// This makes each element's type its exact string value, and prevents modification of the array.
let roles = ["admin", "guest", "editor"] as const;

// The next line attempts to push a new value "pb" into the 'roles' array.
// However, because 'roles' is a readonly tuple (due to 'as const'), this will cause a TypeScript error:
// "Property 'push' does not exist on type 'readonly ["admin", "guest", "editor"]'"
// In other words, you cannot add or remove elements from a readonly tuple.
//roles.push("pb");

// This line accesses the first element of the 'roles' tuple.
// Since 'roles' is a tuple, 'roles[0]' is of type "admin" (the literal type, not just string).
// 'firstRole' will have the type "admin".
const firstRole = roles[0];
