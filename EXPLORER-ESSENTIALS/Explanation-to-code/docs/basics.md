

---

## **1. Variable Type Annotation**
```typescript
let userName: string;
```
- Here, `userName` is explicitly declared as a **string**.
- This means **only** string values can be assigned to it.

#### **Example:**
```typescript
userName = "Pranay Bhoir"; // ✅ Allowed (String)
userName = 25;             // ❌ Error: Type 'number' is not assignable to type 'string'
userName = true;           // ❌ Error: Type 'boolean' is not assignable to type 'string'
```

### **Why Use Type Annotations?**
✅ Helps prevent **accidental type mistakes**.  
✅ **Improves code readability** and **maintainability**.  
✅ Allows TypeScript to **provide better autocompletion** and **error checking**.

---

## **2. Using Types in Functions**
```typescript
function add(a: number, b: number) {
  return a + b;
}
```
- The parameters `a` and `b` **must** be numbers.
- If you try to pass **anything other than a number**, TypeScript will show an error.

#### **Example:**
```typescript
add(10, 33);     // ✅ Allowed (Both are numbers)
add("10", "5");  // ❌ Error: Arguments must be numbers, but strings were passed.
add(true, 5);    // ❌ Error: Boolean is not allowed.
```

---

## **3. Function Return Types**
By default, TypeScript **infers** the return type based on the function body. However, you can explicitly define it:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```
- The `: number` after the parentheses means **this function must return a number**.
- If the function tries to return anything else, TypeScript will show an error.

#### **Example:**
```typescript
function greet(name: string): string {
  return "Hello, " + name;
}

greet("Pranay");  // ✅ Returns: "Hello, Pranay"
greet(123);       // ❌ Error: Argument must be a string
```

---

## **Summary Table**
| Feature                      | Behavior                                      | Example                                      |
| ---------------------------- | --------------------------------------------- | -------------------------------------------- |
| **Variable Type**            | Ensures only a specific type is assigned      | `let userName: string;`                      |
| **Function Parameter Types** | Ensures arguments have the correct types      | `function add(a: number, b: number)`         |
| **Function Return Type**     | Ensures the function returns the correct type | `function add(a: number, b: number): number` |

