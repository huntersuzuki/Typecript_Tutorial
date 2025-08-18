

***

## 1. **The `User` class definition**

```ts
class User {
  protected _firstName: string = "";
  protected _lastName: string = "";
```

### `protected` vs `private`
- **`private`** → Accessible **only inside the same class**.
- **`protected`** → Accessible **inside the class AND inside subclasses** (but **not** from outside the class).
- That’s why you switched from `private` to `protected` — so **child classes** (like `Employee`) can use `_firstName` and `_lastName`.

***

### Setters for validation
```ts
  set firstName(name: string) {
    if (name === "") {
      throw new Error("Invalid name");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name === "") {
      throw new Error("Invalid name");
    }
    this._lastName = name;
  }
```
- **`set` keyword** creates a **setter**.
- This lets you assign like:
  ```ts
  pb.firstName = "Pranay";
  ```
  The assignment actually calls the **setter** function.
- Benefit: You can put validation (e.g., empty string check) before storing the value.

***

### Getter for full name
```ts
  get fulllName() {
    return this._firstName + " " + this._lastName;
  }
```
- **`get` keyword** makes it readable like a **property**:
  ```ts
  console.log(pb.fulllName);
  ```
  without calling it like `pb.fulllName()`.

***

### Static property and method
```ts
  static e_id = "USER";
  
  static greet() {
    console.log("Hello");
  }
```
- `static` members belong to the **class itself**, not to instances.
- You access them with:
  ```ts
  console.log(User.e_id);
  User.greet();
  ```
  No need to create an object (`new User()`).

***

## 2. **Creating and using an instance**
```ts
const pb = new User();

console.log(User.e_id); // works without an instance
User.greet(); // calls the static method

pb.firstName = "Pranay";  
pb.lastName = "Bhoir";  
console.log(pb.fulllName); // "Pranay Bhoir"
```
Here:
- `pb.firstName = "Pranay"` triggers the **setter**.
- `pb.fulllName` triggers the **getter**.

***

## 3. **Subclass: Employee**
```ts
class Employee extends User {
  constructor(public jobTitle: string) {
    super();
  }

  work() {
    console.log(this._firstName);        // allowed because _firstName is protected
    console.log((this.firstName = "Pranay")); // using setter inside subclass
  }
}
```

Key points:
- `extends User` → Employee inherits all non-private members of `User`.
- `protected _firstName` → Accessible here in `Employee`.
- If `_firstName` was `private`, the subclass **could not** use it directly — you’d have to use the `firstName` setter instead.

***

## 4. Why not `private` here?

If you had:

```ts
private _firstName: string;
private _lastName: string;
```
then:

- They would be **invisible** in `Employee`.
- In `Employee`, trying to do:
  ```ts
  console.log(this._firstName);
  ```
  would cause a **TypeScript error**:
  ```
  Property '_firstName' is private and only accessible within class 'User'.
  ```
- You’d be forced to always go through getters/setters from `User`.

***

## 5. **Disadvantages of `private`** in this context

While `private` **increases encapsulation**, it has certain trade-offs when working with inheritance:

### 🚫 Disadvantages:
1. **No subclass access**  
   You cannot read or modify the property, even in classes that extend the parent.

2. **Extra boilerplate**  
   Without `protected`, you’d need getters/setters in the base class for every property you want a child class to use.

3. **Inheritance flexibility reduced**  
   If a subclass needs more control over the property (e.g., custom manipulations), it can’t directly access private members.

4. **Overhead in performance/type checking**  
   Access always has to route through accessor methods — though negligible in most cases, it adds code bulk.

***

## 6. **When to use what?**
- **`private`** → When you truly want to hide internal details, and only allow controlled access through methods or getters/setters.
- **`protected`** → When you want to hide from outside code, but allow subclasses to use or override the property.

***

✅ **In your case, `protected` is the better choice** because:
- You want `Employee` (and other subclasses) to access `_firstName` and `_lastName` directly when needed.
- You still prevent outside access, keeping them encapsulated from external code.

***

### **Access Table Summary**

| Access Modifier | Same Class | Subclass | Outside Class |
|----------------|-----------|----------|---------------|
| `public`       | ✅        | ✅       | ✅            |
| `protected`    | ✅        | ✅       | ❌            |
| `private`      | ✅        | ❌       | ❌            |

***
