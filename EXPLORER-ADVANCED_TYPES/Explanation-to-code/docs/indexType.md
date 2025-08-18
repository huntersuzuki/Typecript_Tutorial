
***

## Understanding the Code

### Type Definition

```ts
type DataStore = {
  [prop: string]: number | boolean;
};
```

- This defines an **index signature** type.
- Meaning:  
  - `DataStore` can have any number of properties (keys of type `string`).
  - Each property's **value** must be either a `number` or a `boolean`.
- In other words, all values in the object must be numbers or booleans.

***

### Variable Initialization

```ts
let store: DataStore = {};
```

- `store` is an empty object but typed as `DataStore`.
- You can add properties with values of type `number` or `boolean`.

***

### Property Assignments

```ts
store.id = 3;        // Allowed (3 is a number)
store.open = false;  // Allowed (false is boolean)
store.name = "Pranay"; // NOT allowed (string is neither number nor boolean)
```

- The first two assignments are allowed because:
  - `3` is a `number`.
  - `false` is a `boolean`.
- The third assignment causes a **TypeScript error** because `"Pranay"` is a **string**, which is not in the allowed union.

***

## Why does this restriction exist?

- The index signature explicitly restricts the type of values to `number | boolean`.
- This means any property you add must match this type.
- Adding a `string` value breaks the contract, so the compiler complains.

***

## How to fix if you want to allow strings?

If you want to allow strings as values in addition to numbers and booleans, change the union type to include `string`:

```ts
type DataStore = {
  [prop: string]: number | boolean | string;
};

let store: DataStore = {};

store.id = 3;           // OK
store.open = false;     // OK
store.name = "Pranay";  // Now also OK
```

***

## Summary

- The `DataStore` type defines that all property values must be of type `number` or `boolean`.
- Therefore, assigning a `string` value results in a compile-time error.
- To allow strings, include `string` in the union type of the index signature.

***
Here are examples showing both how to **enforce** strict allowed property types and how to **widen** them dynamically in TypeScript:

***

## 1. Strict Enforcement (Only number and boolean)

Your original definition:
```ts
type DataStore = {
  [prop: string]: number | boolean;
};

let store: DataStore = {};

store.height = 180;      // ✅ Allowed
store.isActive = true;   // ✅ Allowed
store.label = "Active";  // ❌ Error: Type 'string' is not assignable to type 'number | boolean'
```

**Result:** Only properties with `number` or `boolean` values can be assigned. Any other type gives an error.

***

## 2. Widening Allowed Types (number, boolean, string)

If you want to allow `string` values as well:
```ts
type DataStore = {
  [prop: string]: number | boolean | string;
};

let store: DataStore = {};

store.age = 30;            // ✅ Allowed
store.verified = false;    // ✅ Allowed
store.nickname = "Pranay"; // ✅ Allowed
```

Now: All common primitives (`number`, `boolean`, `string`) are permitted.

***

## 3. Restricting to Specific Property Keys with Different Types

You can combine fixed keys and an index signature for advanced control:
```ts
type DataStore = {
  id: number;
  active: boolean;
  [prop: string]: number | boolean;
};

let store: DataStore = { id: 10, active: true };
store.value = 99;         // ✅ Allowed
store.active = false;     // ✅ Allowed
store.status = "open";    // ❌ Error: string not allowed for additional keys
```
- `id` and `active` are required, but other keys must also be either `number` or `boolean`.

***

## 4. Generic Approach for Dynamic Widening

If you want to easily control which types are permitted, use a generic type:
```ts
type DataStore = {
  [prop: string]: T;
};

let stringStore: DataStore = {};
stringStore.title = "Hello";    // ✅

let mixedStore: DataStore = {};
mixedStore.count = 7;           // ✅
mixedStore.flag = true;         // ✅
mixedStore.name = "Pranay";     // ✅
```
- This allows you to set the allowable value types dynamically.

***

## 5. Advanced: Type Based on Key

If you want certain keys to have specific types:
```ts
type DataStore = {
  age: number;
  isActive: boolean;
  name: string;
};

let store: DataStore = {
  age: 25,
  isActive: true,
  name: "Pranay",
};

store.age = "twenty";         // ❌ Error: string not allowed for 'age'
store.isActive = "yes";       // ❌ Error: string not allowed for 'isActive'
store.name = "John";          // ✅ Allowed
```

***

## Summary

- **Strict Enforcement:** Only assign allowed types; compiler will block others.
- **Widen Dynamically:** Change index signature or use generics to allow wider types.
- **Key-specific Types:** For complex objects, specify each key's type.
