### **Breaking Down the Code: Optional Parameters & Nullish Coalescing Operator**

This TypeScript code demonstrates:
1. **Optional Parameters (`?`)**
2. **Optional Properties in Objects**
3. **Nullish Coalescing (`??`)** vs **Logical OR (`||`)**

---

## **1. Optional Parameters (`?`) in Function Arguments**
```typescript
function generateError(msg?: string) {
  throw new Error(msg);
}

generateError(); // No error
generateError("An error occurred"); // No error
```
- The `?` operator in `msg?: string` makes `msg` **optional**.
- If we don’t provide an argument, `msg` will be `undefined`, but the function still works.
- Before using `?`, TypeScript **expected exactly one argument**, and calling `generateError()` without arguments caused an error.
- Now, `generateError()` works **with or without arguments**.

### **How It Works Internally**
```typescript
function generateError(msg: string | undefined) {
  throw new Error(msg);
}
```
- Since `msg` is optional, TypeScript treats it as **`string | undefined`**.

---

## **2. Optional Properties in Objects**
```typescript
type User = {
  name: string;
  age: number;
  role?: "admin" | "guest";
};
```
- The `role` property is optional, meaning:
  - It can be `"admin"`, `"guest"`, or **left undefined**.
- Example Usage:
  ```typescript
  const user1: User = { name: "Alice", age: 25, role: "admin" }; // ✅ Valid
  const user2: User = { name: "Bob", age: 30 }; // ✅ Valid (role is undefined)
  ```
- Without `?`, TypeScript would **require** `role`, making `user2` invalid.

---

## **3. Nullish Coalescing (`??`) vs Logical OR (`||`)**
```typescript
let input = "";

// Nullish Coalescing
const didProvideInput = input ?? false; // Output: ""

// Logical OR
const didProvideInput = input || false; // Output: false
```

### **3.1. Nullish Coalescing (`??`)**
- `??` **only checks for `null` or `undefined`**.
- If `input` is **not** `null` or `undefined`, it **returns the original value**.
- Example:
  ```typescript
  console.log("" ?? "default"); // Output: ""
  console.log(null ?? "default"); // Output: "default"
  console.log(undefined ?? "default"); // Output: "default"
  ```

### **3.2. Logical OR (`||`)**
- `||` **checks for any falsy value** (`0`, `""`, `null`, `undefined`, `false`, `NaN`).
- If `input` is falsy, it **returns the right-hand value**.
- Example:
  ```typescript
  console.log("" || "default"); // Output: "default"
  console.log(0 || "default"); // Output: "default"
  console.log(null || "default"); // Output: "default"
  console.log(undefined || "default"); // Output: "default"
  console.log("Hello" || "default"); // Output: "Hello"
  ```

---

## **Key Differences Between `??` and `||`**
| Operator                  | Checks for            | Returns Original Value If          | Returns Default Value If                                             |
| ------------------------- | --------------------- | ---------------------------------- | -------------------------------------------------------------------- |
| `??` (Nullish Coalescing) | `null` or `undefined` | Value is **not null or undefined** | Value is `null` or `undefined`                                       |
| `                         |                       | ` (Logical OR)                     | Any **falsy value** (`0`, `""`, `false`, `NaN`, `null`, `undefined`) | Value is **truthy** | Value is **falsy** |

---

## **Example Where `??` is Better Than `||`**
Consider setting a default username:
```typescript
const username = "";
console.log(username || "Guest"); // Output: "Guest" ❌ (wrong)
console.log(username ?? "Guest"); // Output: "" ✅ (correct)
```
- `||` incorrectly treats `""` (empty string) as **falsy** and assigns `"Guest"`.
- `??` correctly allows `""` since it’s **not `null` or `undefined`**.

---

## **Summary**
1. **Optional Parameters (`?`)** allow function arguments to be optional.
2. **Optional Properties (`?`)** let object properties be optional (`undefined` by default).
3. **`??` (Nullish Coalescing)** is used to **check only for `null` or `undefined`**.
4. **`||` (Logical OR)** is used to **check for any falsy value**.

