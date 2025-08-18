Alright — let’s go through this **step-by-step**, because in this example you’re demonstrating:

- **Basic interface creation**
- **Interface inheritance (extending other interfaces)**
- **Implementing interfaces in classes**
- **Using interface-implementing classes as function parameter types**

***

## **1. Base Interface: `Authenticable`**

```ts
interface Authenticable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}
```

- This defines a **contract** saying:
    - Any type that is "Authenticable" must have:
        - An `email` string property
        - A `password` string property
        - A `login()` method returning `void`
        - A `logout()` method returning `void`
- No implementation is provided — only the **structure (shape)** is described.

***

## **2. Interface Inheritance**

```ts
interface AuthenticableAdmin extends Authenticable {
  role: "admin" | "superAdmin";
}
```

- **`extends` with interfaces**:
    - `AuthenticableAdmin` inherits all members of `Authenticable`.
    - Adds a new required property:
      ```ts
      role: "admin" | "superAdmin";
      ```
      This is a **string literal union type**, meaning:
        - `role` can **only** be `'admin'` or `'superAdmin'`.
- After extension, `AuthenticableAdmin` is effectively:

```ts
interface AuthenticableAdmin {
  email: string;
  password: string;
  login(): void;
  logout(): void;
  role: "admin" | "superAdmin";
}
```

📌 **Why extend interfaces?**
- To create **specialized types** that still follow the base structure.
- Similar to class inheritance but for **type definitions**.

***

## **3. Implementing an Interface in a Class**

```ts
class AuthenticableUser implements Authenticable {
  constructor(
    public email: string,
    public password: string,
  ) {}
  login() {}
  logout() {}
}
```

### How it works:
- **`implements Authenticable`** means:
    - TypeScript checks that:
        - `AuthenticableUser` has **all properties** and **methods** from `Authenticable`.
- The constructor parameters with `public`:
    - Auto-create and initialize **public instance properties** (`email` and `password`).
- Empty method bodies `{}` here satisfy the type requirement but do nothing — in real-world use, you’d add actual logic.

⚠ **If you omit any property/method** from `Authenticable`, TypeScript will give an error:
```ts
class BadUser implements Authenticable {
  constructor(public email: string) {} // ❌ Missing password, login(), logout()
}
```

***

## **4. Using the Class as a Function Parameter Type**

```ts
function adminUser(user: AuthenticableUser) {
  user.email; // OK: 'email' is public and from the interface
  user.login(); // OK: method from the interface
  // ...
}
```

- The function `adminUser` explicitly says:
    - `user` must be an **instance of the `AuthenticableUser` class**.
- Since `AuthenticableUser` implements `Authenticable`, we automatically know the parameter will have:
    - `.email`, `.password`, `.login()`, `.logout()`

***

## **5. A More Flexible Alternative**
If you want the function to work with **any** object/class that implements `Authenticable` (not just `AuthenticableUser`), you should type the parameter **as the interface** instead of the class:

```ts
function adminUser(user: Authenticable) {
  user.login(); // works for any Authenticable
}
```

Now this function works with:
```ts
adminUser(new AuthenticableUser("mail@test.com", "1234"));

adminUser({
  email: "x@test.com",
  password: "abc",
  login: () => {},
  logout: () => {}
}); // Works for plain object too
```

***

## **6. Key Concepts Recap**

| Feature | Purpose |
|---------|---------|
| **`interface`** | Defines a contract (shape) but no logic |
| **`extends`** | Allows one interface to inherit members from another |
| **`implements`** | Forces a class to satisfy an interface's structure |
| **Function parameter as interface** | Makes the function accept *any* matching type |
| **Function parameter as class** | Restricts to that specific class or subclasses |

***

💡 **Real-world analogy**:
- `Authenticable` = "Any account that can log in" — defines the rules.
- `AuthenticableAdmin` = "Any account that can log in AND is an admin" — extra rule added.
- `AuthenticableUser` = A concrete class that actually implements those rules.
- The function `adminUser()` decides how strict it is about *who* it accepts.

***
Alright! Let me extend the previous example to show you a function that works for both **admin users** and **normal users**, leveraging interface inheritance.

***

## Example: A Flexible Function with Interface Inheritance

### Interfaces

```ts
interface Authenticable {
  email: string;
  password: string;
  login(): void;
  logout(): void;
}

interface AuthenticableAdmin extends Authenticable {
  role: "admin" | "superAdmin";
}
```

- `Authenticable` defines basic login/logout contract.
- `AuthenticableAdmin` **extends** that with a `role` property restricted to admin roles.

***

### Classes

```ts
class AuthenticableUser implements Authenticable {
  constructor(
    public email: string,
    public password: string,
  ) {}

  login() {
    console.log(`${this.email} logged in`);
  }

  logout() {
    console.log(`${this.email} logged out`);
  }
}

class AdminUser implements AuthenticableAdmin {
  constructor(
    public email: string,
    public password: string,
    public role: "admin" | "superAdmin"
  ) {}

  login() {
    console.log(`${this.email} logged in as ${this.role}`);
  }

  logout() {
    console.log(`${this.email} logged out`);
  }
}
```

- `AuthenticableUser` implements `Authenticable`
- `AdminUser` implements `AuthenticableAdmin` (which includes everything `Authenticable` has, plus `role`)

***

### Single Function Handling Both User Types

```ts
function authenticateUser(user: Authenticable) {
  user.login();

  // Additional logic that works for all Authenticable users

  if ("role" in user) {
    console.log(`User role is: ${(user as AuthenticableAdmin).role}`);
  } else {
    console.log("No role assigned to this user.");
  }
}
```

- The function takes a parameter typed as the base `Authenticable` interface.
- It can **handle any object** that matches this interface or those extending it.
- Inside the function, it uses a **type guard** (`"role" in user`) to check if the user has a `role` property.
- The role is then accessed safely by **type assertion** to `AuthenticableAdmin`.
- This approach offers **flexibility** with type safety.

***

### Usage

```ts
const normalUser = new AuthenticableUser("normal@example.com", "password123");
const adminUser = new AdminUser("admin@example.com", "adminpass", "admin");

authenticateUser(normalUser);
// Output:
// normal@example.com logged in
// No role assigned to this user.

authenticateUser(adminUser);
// Output:
// admin@example.com logged in as admin
// User role is: admin
```

***

## Summary

- Interfaces can inherit from others, with `AuthenticableAdmin` extending `Authenticable`.
- Classes implement respective interfaces.
- A single function can accept the base interface type and use type guards to work with extended types.
- This pattern promotes **code reuse** and **flexible yet type-safe APIs**.

