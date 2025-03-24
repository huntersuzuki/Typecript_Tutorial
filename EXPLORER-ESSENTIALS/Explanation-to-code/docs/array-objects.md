

---

## **1. Type Inference in Arrays**
```typescript
let hobbies = ["Gaming", "Cooking"];
```
- TypeScript **automatically infers** that `hobbies` is an array of strings (`string[]`).
- This means that only **string values** can be added to this array.

#### **Example:**
```typescript
hobbies.push("Reading"); // ✅ No error, because "Reading" is a string
hobbies.push(10); // ❌ Error: TypeScript does not allow a number in a string array
```

---

## **2. Using Union Types in Arrays**
```typescript
let users: Array<string | number>;
```
- This means that `users` can store both `string` and `number` values.
- The **alternative syntax** for this is:
  ```typescript
  let users: (string | number)[];
  ```
  Both methods are **equivalent**.

#### **Example:**
```typescript
users = ["Pranay", 22]; // ✅ No error
users = ["Pranay", "Bhoir"]; // ✅ No error
users = [10, 20]; // ✅ No error
users = [true, "Test"]; // ❌ Error: boolean is not allowed
```

---

## **3. Tuples in TypeScript**
```typescript
let possibleResults: [number, number];
```
- A **tuple** is a fixed-length array with predefined types.
- In this case, `possibleResults` **must** have exactly **two** numbers.

#### **Example:**
```typescript
possibleResults = [1, -1]; // ✅ No error
possibleResults = [10, 20]; // ✅ No error
possibleResults = [10, 20, 30]; // ❌ Error: More than two values
possibleResults = ["Win", 1]; // ❌ Error: First value must be a number
```

---

## **4. Object Types**
```typescript
let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
};
```
- We are explicitly **defining the structure** of the `user` object.
- The object must have:
  - `name` → A string.
  - `age` → A number **or** a string (`23` or `"twenty-three"`).
  - `hobbies` → An array of strings.
  - `role` → Another object containing:
    - `description` → A string.
    - `id` → A number.

#### **Example:**
```typescript
user = {
  name: "Pranay",
  age: 23,
  hobbies: ["Kabaddi", "Gaming"],
  role: {
    description: "admin",
    id: 1,
  },
}; // ✅ No error

user = {
  name: "Pranay",
  age: "twenty-three", // ✅ Allowed because age can be a string
  hobbies: ["Kabaddi", "Gaming"],
  role: {
    description: "admin",
    id: 1,
  },
}; // ✅ No error

user = {
  name: "Pranay",
  age: 23,
  hobbies: ["Kabaddi", "Gaming"],
  role: {
    description: "admin",
    id: "one", // ❌ Error: id must be a number
  },
}; // ❌ Error
```

---

## **5. `{}` (Empty Object Type)**
```typescript
let val: {} = "pranay";
let vale: {} = [1, 2, "max"];
```
- `{}` is a special type in TypeScript that means **"any non-null, non-undefined value."**
- This means:
  - You **cannot** assign `null` or `undefined` to `{}`.
  - You **can** assign anything else (string, number, array, object, etc.).

#### **Example:**
```typescript
let val: {} = "Hello"; // ✅ Allowed
let val2: {} = 123; // ✅ Allowed
let val3: {} = {}; // ✅ Allowed
let val4: {} = [1, 2, 3]; // ✅ Allowed
let val5: {} = undefined; // ❌ Error
let val6: {} = null; // ❌ Error
```

---

## **6. The `Record` Type**
```typescript
let data: Record<string, number | string>;
```
- The `Record<K, V>` type is a **generic type** where:
  - `K` (key) → must be a string.
  - `V` (value) → can be a number or a string.

#### **Example:**
```typescript
data = {
  entry: 1, // ✅ Allowed (string key, number value)
  entry2: "2", // ✅ Allowed (string key, string value)
};

data = {
  id: 101,
  name: "Pranay",
}; // ✅ Allowed

data = {
  10: "ten", // ❌ Error: Keys must be strings, not numbers
};
```

---

### **Summary**
| Feature                      | Description                                    | Example                                   |
| ---------------------------- | ---------------------------------------------- | ----------------------------------------- |
| **Type Inference in Arrays** | TypeScript infers types from values.           | `let hobbies = ["Gaming", "Cooking"];`    |
| **Union Types in Arrays**    | Allows multiple types in an array.             | `let users: (string                       | number)[];` |
| **Tuples**                   | Fixed-length arrays with specific types.       | `let tuple: [number, number] = [10, 20];` |
| **Explicit Object Types**    | Defines object structure.                      | `{ name: string, age: number              | string }`   |
| **`{}` Type**                | Accepts anything except `null` or `undefined`. | `let val: {} = "text";`                   |
| **`Record<K, V>` Type**      | Defines objects with specific key-value types. | `let data: Record<string, number          | string>;`   |

---
