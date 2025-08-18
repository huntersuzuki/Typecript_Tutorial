Excellent example 👌 You're now mixing **TypeScript union types** with **runtime class checks** (`instanceof`). Let’s break it down:

***

## Step 1: The Classes

```ts
class User {
  constructor(public name: string) {}
  join() {
    console.log(`${this.name} joined`);
  }
}

class Admin {
  constructor(public permissions: string[]) {}
  scan() {
    console.log("Admin scanning with permissions:", this.permissions);
  }
}
```

- **`User`**
  - Takes a `name` (string).
  - Has a method `join()`.

- **`Admin`**
  - Takes an array of `permissions` (like `"ban"`, `"restore"`).
  - Has a method `scan()`.

***

## Step 2: Creating Instances
```ts
const user = new User("Pranay");
const admin = new Admin(["ban", "restore"]);
```
- `user` is an instance of `User`.
- `admin` is an instance of `Admin`.

***

## Step 3: The Union Type
```ts
type Entity = User | Admin;
```

This means:  
👉 An `Entity` can be **either** a `User` **or** an `Admin`.

***

## Step 4: The Function with Type Narrowing
```ts
function init(entity: Entity) {
  if (entity instanceof User) {
    // ✅ TypeScript now knows entity is a User
    entity.join();
    return;
  }

  // ✅ If it's not a User, TS narrows to Admin
  entity.scan();
}
```

### Key Point: `instanceof` Narrowing
- `instanceof` is a **runtime operator in JavaScript** that checks if an object is created by a certain class constructor (or inherits from it).
- TypeScript understands this and **narrows the type** accordingly.

So inside the `if`, TS knows `entity` is specifically `User`.  
In the `else` branch, it knows it must be `Admin`.

***

## Step 5: Usage
```ts
init(user);  
// Output: "Pranay joined"

init(admin);
// Output: "Admin scanning with permissions: [ 'ban', 'restore' ]"
```

***

## ✅ Summary
- You defined two classes: `User` and `Admin`.
- Created a union type `Entity = User | Admin`.
- Used `instanceof` to determine at runtime if an `Entity` is a `User` or `Admin`.
- TypeScript **narrows the type based on `instanceof` checks**.

***

⚡ Bonus Tip: If later you get other entity types (say `Guest`), `instanceof` checks still work, but you might consider switching to a **discriminated union approach** (like adding a `kind: "user" | "admin" | "guest"` property), which can give you **strict exhaustiveness checks** that `instanceof` doesn’t.

***

Here's a **real-world example** of using **TypeScript discriminated unions** in a practical scenario: modeling form input fields. This is a common problem when building UI components or forms handling different types of inputs with their own unique properties.

***

## Real-World Example: Form Input Fields with Discriminated Unions

### Type Definitions

```ts
// Define different kinds of form fields with a 'type' discriminator

interface TextField {
  type: "text";
  value: string;
  placeholder?: string;
}

interface CheckboxField {
  type: "checkbox";
  checked: boolean;
}

interface DropdownField {
  type: "dropdown";
  options: string[];
  selected: string;
}

// Union type that covers all possible fields
type FormField = TextField | CheckboxField | DropdownField;
```

***

### Function to Render Form Inputs

```ts
function renderField(field: FormField): string {
  switch (field.type) {
    case "text":
      return ``;

    case "checkbox":
      return ``;

    case "dropdown":
      return `
        
          ${field.options
            .map(
              (option) =>
                `${option}`
            )
            .join("")}
        
      `;

    default:
      // Exhaustiveness check: if a new field type is added, TypeScript will give an error here
      const _exhaustiveCheck: never = field;
      return _exhaustiveCheck;
  }
}
```

***

### Example Usage

```ts
const usernameField: TextField = {
  type: "text",
  value: "JohnDoe",
  placeholder: "Enter username",
};

const subscribeField: CheckboxField = {
  type: "checkbox",
  checked: true,
};

const countryField: DropdownField = {
  type: "dropdown",
  options: ["USA", "Canada", "Mexico"],
  selected: "Canada",
};

console.log(renderField(usernameField));
// 

console.log(renderField(subscribeField));
// 

console.log(renderField(countryField));
// USACanadaMexico
```

***

## Why This Is a Useful Pattern

- The `type` property serves as a **discriminant**, allowing TypeScript to narrow down the exact type of `field`.
- This enables **safe access** to type-specific properties like `value`, `checked`, or `options`.
- The exhaustive `switch` with a `never`-typed default case ensures at **compile time** that all possible cases are handled, avoiding bugs.
- Makes the code **readable**, **maintainable**, and **type-safe** in UI forms or in any situation where objects have variants with differing structures.

***

[1] https://antman-does-software.com/typescripts-discriminated-unions-with-real-use-cases
[2] https://antondevtips.com/blog/mastering-discriminated-unions-in-typescript
[3] https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
[4] https://www.developerway.com/posts/advanced-typescript-for-react-developers-discriminated-unions
[5] https://www.linkedin.com/pulse/modeling-real-world-typescript-sourav-sadhukhan-7rcof
[6] https://www.typescriptlang.org/play/typescript/meta-types/discriminate-types.ts.html
[7] https://www.fullstory.com/blog/discriminated-unions-and-exhaustiveness-checking-in-typescript/
[8] https://felt.com/blog/narrowing-typescript-type-predicates-discriminated-unions