
# abstract class UIElement {
Alright — let’s go step-by-step and break this down because your example touches on **TypeScript’s abstract classes**, **inheritance**, and **access modifiers in constructors**.

***

## 1. **Abstract Class: `UIElement`**

```ts
abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    // logic to duplicate the UI element
  }
}
```


### What’s going on here:

- **`abstract` keyword**:
In TypeScript, an `abstract` class is a **blueprint** for other classes.
    - You **cannot** directly create an instance of it.
    - It is meant to be **extended** by subclasses that provide specific implementations.
- **Constructor with `public identifier: string`**:
    - This is a **parameter property** in TypeScript.
    - Instead of separately declaring `public identifier: string;` and then assigning inside the constructor,
TypeScript lets you do both in one step.
    - So this:

```ts
constructor(public identifier: string) {}
```

means:

```ts
public identifier: string;
constructor(identifier: string) {
    this.identifier = identifier;
}
```

- **The `clone` method**:
    - This is a **regular method** (not abstract) in the abstract class.
    - All subclasses will inherit it as-is unless they override it.
    - In real UI frameworks, this method might create a copy of the current UI element with some changes.

***

## 2. **Why you can’t do `new UIElement()`**

```ts
// let uiElement = new UIElement() 
// Error: TS2511: Cannot create an instance of an abstract class.
```

This happens because:

- Abstract classes are **incomplete on their own**.
- They might have abstract methods with no body, or be meant to represent a generic type.
- It’s the same concept as saying:
    - "I have a blueprint for a generic UI element"
    - "But I haven’t decided what exact type (Button, Drawer, Menu, etc.) it is yet"
- TypeScript enforces that you only create **concrete subclasses** that extend this.

***

## 3. **Subclass: `SideDrawerElement`**

```ts
class SideDrawerElement extends UIElement {
  constructor(
    public identifier: string,
    public position: "left" | "right", // union type: only "left" or "right" allowed
  ) {
    super(identifier);
  }
}
```


### Key observations:

- **`extends UIElement`** means this class inherits:
    - all properties and methods from `UIElement`
    - including `identifier` and `clone()`
- **Union type `"left" | "right"`**:
    - `position` can only have those two values.
    - This is useful for restricting UI placement to only two sides.
- **Constructor and `super()`**:
    - `super(identifier)` calls the **parent constructor** in `UIElement`.
    - You **must** call `super()` in a subclass constructor before using `this`.
    - This ensures the `UIElement`’s setup runs first.
- **Parameter properties again**:
    - `public identifier: string` in the constructor not only declares the property but also assigns the passed value automatically.
    - Same for `position`.

***

## 4. **How you’d use it**

```ts
let drawer = new SideDrawerElement("settings-drawer", "left");

console.log(drawer.identifier); // "settings-drawer"
console.log(drawer.position);   // "left"

drawer.clone("footer-area");    // inherited from UIElement
```

Here:

- We are instantiating **`SideDrawerElement`** (not `UIElement`, because it's abstract).
- We get **all features** from the abstract class plus new features from the subclass.

***

## 5. **Purpose of this Pattern**

- **Abstract classes** are useful for common logic:
    - Example: All UI elements might share:
        - an `identifier`
        - a `clone()` method
        - maybe `render()` or `destroy()` methods.
- Subclasses define **specific behaviors**:
    - `SideDrawerElement` might have an open/close animation.
    - A `ButtonElement` might have a click handler.

This is **Object-Oriented Programming (OOP)** in TypeScript, combining inheritance with type safety.

***

### Quick Diagram:

```
[ Abstract Class: UIElement ]
     |
     | extends
     v
[ Class: SideDrawerElement ]
```

`UIElement` → defines **common properties \& logic**
`SideDrawerElement` → adds **drawer-specific details**

***


