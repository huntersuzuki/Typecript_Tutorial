This TypeScript code demonstrates various aspects of function typing, including return types, `void`, `never`, function as a type, and function types in objects. Let's go through it step by step.  

---

## **1. Function with Explicit Parameter and Return Types**
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```
### **Explanation**:  
- The function `add` takes two parameters `a` and `b`, both explicitly typed as `number`.  
- The return type is also specified as `number`, meaning the function must return a number.  
- If we try to return a different type (e.g., a string), TypeScript will throw an error:  
  ```typescript
  return "a" + "b"; // Error: Type 'string' is not assignable to type 'number'.
  ```

---

## **2. Function with `void` Return Type**
```typescript
function message(msg: string): void {
  console.log(msg);
}
```
### **Explanation**:  
- The `message` function accepts a string parameter `msg` and logs it to the console.  
- It has a return type of `void`, meaning it **does not return a value**.  
- If we try to return something, TypeScript will show an error:  
  ```typescript
  return "Hello"; // Error: Type 'string' is not assignable to type 'void'.
  ```

---

## **3. Function with `never` Return Type**
```typescript
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}
```
### **Explanation**:  
- The `never` return type indicates that the function **never successfully returns**.  
- This happens because:  
  1. It logs an error message.
  2. It throws an error, which **immediately stops execution**.  
- If a function contains an **infinite loop** or **always throws an error**, it has a return type of `never`.  
- Example of an infinite loop:
  ```typescript
  function infiniteLoop(): never {
    while (true) {
      console.log("This runs forever");
    }
  }
  ```

---

## **4. Function as a Type (Callback Functions)**
```typescript
function performJob(callBack: (m: string) => void) {
  callBack("Job done");
}

performJob(message);
```
### **Explanation**:  
- `performJob` takes a **function** as a parameter, called `callBack`.  
- The expected function type is `(m: string) => void`, meaning it takes a string and returns nothing (`void`).  
- Inside `performJob`, `callBack` is executed with `"Job done"` as an argument.  
- `message` function fits this type, so `performJob(message);` is valid.  
- Execution flow:  
  - `performJob` calls `message("Job done")`, which logs `"Job done"`.

---

## **5. Function Type in an Object**
```typescript
type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: "Pranay",
  age: 24,
  greet() {
    console.log("Hello there");
    return this.name;
  },
};

user.greet();
```
### **Explanation**:  
- A `type` alias `User` is created, defining an object structure with:  
  - `name`: a string  
  - `age`: a number  
  - `greet`: a function that returns a string  
- The `user` object follows this structure.  
- `greet` function logs `"Hello there"` and returns `this.name` (`"Pranay"`).  
- Calling `user.greet()`:
  - Logs: `"Hello there"`
  - Returns: `"Pranay"`

---

## **Key Takeaways**  
1. **Function Parameter & Return Types**  
   - Use explicit types for function parameters and return values for better type safety.  
2. **`void` Return Type**  
   - Functions that don't return a value should be marked as `void`.  
3. **`never` Return Type**  
   - Functions that never successfully return (e.g., infinite loops or functions that always throw errors) use `never`.  
4. **Functions as Parameters (Callbacks)**  
   - Functions can be passed as arguments using specific function type signatures.  
5. **Functions in Objects**  
   - Function types can be part of an object structure, ensuring type safety when defining methods in objects.

