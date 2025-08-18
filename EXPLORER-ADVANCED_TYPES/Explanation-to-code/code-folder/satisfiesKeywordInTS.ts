// This code demonstrates two ways to ensure an object matches a specific type in TypeScript,
// and highlights the use of the `satisfies` keyword for type checking without changing inference.

// --- Example 1: Traditional Type Annotation ---
// Here, we declare 'dataEntries' as a constant with the type 'Record<string, number>'.
// This means any property (with a string key) must have a number value.
const dataEntries: Record<string, number> = {
  entry1: 0.53,
  entry2: -1.88,
};

// Accessing a property that doesn't exist (entry3) will not cause a compile-time error,
// but its value will be 'undefined' at runtime.
dataEntries.entry3;

// --- Example 2: Using the 'satisfies' Keyword ---
// The 'satisfies' keyword checks that the object matches the type 'Record<string, number>',
// but it does NOT change the inferred type of the object itself.
// This means TypeScript will still infer the most specific type for 'dataEntries' (i.e., the exact keys).
const dataEntries2 = {
  entry1: 0.53,
  entry2: -1.88,
} satisfies Record<string, number>;

// If you try to access a property that doesn't exist (entry3), TypeScript will give an error,
// because 'dataEntries2' is inferred to only have 'entry1' and 'entry2' as keys.
// Uncommenting the next line would cause a TypeScript error:
// dataEntries2.entry3;

// Summary:
// - Using ': Record<string, number>' allows any string key, but you lose information about the exact keys.
// - Using 'satisfies Record<string, number>' checks the shape, but keeps the specific keys in the type.
