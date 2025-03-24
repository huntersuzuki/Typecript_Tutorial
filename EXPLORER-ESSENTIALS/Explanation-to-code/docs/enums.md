

---

## **1. What is an Enum?**
An **enum** (short for "enumeration") is a TypeScript feature that allows you to define a **set of named constants**.

```typescript
enum Role {
  Admin,
  Editor,
  Guest,
}
```
- This creates three values:  
  - `Role.Admin` → **0**
  - `Role.Editor` → **1**
  - `Role.Guest` → **2**

### **Usage Example:**
```typescript
let userRole = Role.Admin; // userRole = 0
userRole = Role.Guest;     // userRole = 2
userRole = Role.Editor;    // userRole = 1
```

**Why use Enums?**  
✅ Makes the code **more readable** (instead of using numbers directly).  
✅ Prevents accidental use of incorrect values.  

---

## **2. How TypeScript Converts Enums to JavaScript**
TypeScript **compiles** enums into **regular JavaScript objects**.  
If you check the **compiled JavaScript code**, it looks like this:

```javascript
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
```
- This **mimics** the enum behavior in JavaScript.
- TypeScript does this because **JavaScript does not have enums** natively.

---

## **3. Custom Enum Values**
By default, enums start with `0`, but you can **assign custom values**.

```typescript
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

let response = Status.Success;  // response = 200
```
- `Status.Success` now represents `200`, `Status.NotFound` is `404`, etc.

---

## **4. Alternative: Union Types Instead of Enums**
Enums are useful, but sometimes we can **use union types instead** for simpler code.

```typescript
let userRole: "admin" | "editor" | "guest" | "user" = "admin";
userRole = "editor"; // ✅ Allowed
userRole = "guest";  // ✅ Allowed
userRole = "user";   // ✅ Allowed
// userRole = "manager"; ❌ Error (Only the predefined values are allowed)
```

### **Why Use Union Types Instead of Enums?**
✅ **Takes up less memory** (no extra compiled code).  
✅ **Works well in frontend applications** (especially with TypeScript and React).  

---

## **5. Using Tuples to Restrict Array Values**
A **tuple** is a special type of array where **the length and types are fixed**.

```typescript
let possibleResults: [1 | -1, 1 | -1];

possibleResults = [1, 1];  // ✅ Allowed
possibleResults = [-1, 1]; // ✅ Allowed
// possibleResults = [2, -1]; ❌ Error (Only 1 or -1 is allowed)
```

**Why Use Tuples?**  
✅ Ensures the array contains **only specific values**.  
✅ Prevents mistakes where an unexpected value might be assigned.

---

## **Summary Table**
| Feature          | Example                                         | Use Case                                                |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------- |
| **Enums**        | `enum Role { Admin, Editor, Guest }`            | When you need named constants with automatic numbering. |
| **Custom Enums** | `enum Status { Success = 200, NotFound = 404 }` | When you want **specific** numerical values.            |
| **Union Types**  | `let userRole: "admin"                          | "editor";`                                              | When you want a simple and memory-efficient alternative to enums. |
| **Tuples**       | `let result: [1                                 | -1, 1                                                   | -1];`                                                             | When you want to **fix** the length and allowed values in an array. |

---

