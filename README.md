## TypeScript Tutorial

A hands-on tutorial repository for learning and practicing TypeScript. Each topic includes small, focused examples under `Explanation-to-code/code-folder` and accompanying explanations under `docs/`.

### Repository layout

- **ADVANCED_TYPES**: Advanced typing patterns in TypeScript
  - `Explanation-to-code/code-folder`: examples such as function overloads, type guards, intersection types, index signatures
  - `Explanation-to-code/docs`: markdown explanations for the above topics
- **CLASSES_IN_TYPESCRIPT**: Class fundamentals, inheritance, abstract and advanced class features
  - `Explanation-to-code/code-folder`: TypeScript and built JavaScript examples, plus a local `tsconfig.json`
  - `Explanation-to-code/docs`: topic write-ups
- **EXPLORER-ESSENTIALS**: Core TypeScript concepts (basics, functions, enums, arrays/objects, special/unknown types, optional values)
  - `Explanation-to-code/code-folder`: small, runnable `.ts` snippets
  - `Explanation-to-code/docs`: matching guides
- **EXPLORER-TYPESCRIPT_COMPILER**: Working with the TypeScript compiler and project configuration
  - `Explanation-to-code/code-folder/typescript-configuration`: minimal Node-style project with `tsconfig.json`
  - `src/` → compiled to `dist/`
- **INTERFACES_IN_TYPESCRIPT**: Interfaces and implementing them
  - `Explanation-to-code/code-folder`: interface examples
  - `Explanation-to-code/docs`: conceptual notes
- **NEXT-GEN-JS-TS**: Modern TS/JS setup using a simple dev server
  - `Explanation-to-code/code-folder/next-gen-01-starting-setup`: `lite-server` + TypeScript config, compiles `src/` to `dist/`, served via the browser

### Prerequisites

- Node.js and npm installed
- TypeScript (local per sub-project is recommended)

You can install TypeScript locally where needed:

```bash
npm i -D typescript
```

Run the compiler using npx:

```bash
npx tsc -p tsconfig.json
```

### Quick start (top-level)

This repository is organized as independent examples. Navigate into a specific example folder and follow its steps. Two sub-projects include a `package.json` and are meant to be run directly:

1) `EXPLORER-TYPESCRIPT_COMPILER/Explanation-to-code/code-folder/typescript-configuration`
2) `NEXT-GEN-JS-TS/Explanation-to-code/code-folder/next-gen-01-starting-setup`

### Running: TypeScript compiler project

Path: `EXPLORER-TYPESCRIPT_COMPILER/Explanation-to-code/code-folder/typescript-configuration`

```bash
cd EXPLORER-TYPESCRIPT_COMPILER/Explanation-to-code/code-folder/typescript-configuration
npm i -D typescript
npx tsc -p tsconfig.json
# Outputs to ./dist

# Run compiled files with Node (adjust file name as needed)
node dist/app.js
node dist/calculator.js
```

Notes:
- `tsconfig.json` targets modern JS and outputs to `dist`. Source lives in `src/`.
- If you prefer auto-recompile, use `npx tsc -w -p tsconfig.json`.

### Running: Next-gen browser setup

Path: `NEXT-GEN-JS-TS/Explanation-to-code/code-folder/next-gen-01-starting-setup`

```bash
cd NEXT-GEN-JS-TS/Explanation-to-code/code-folder/next-gen-01-starting-setup
npm i
npm i -D typescript

# Terminal 1: compile TS → dist (watch mode)
npx tsc -w -p tsconfig.json

# Terminal 2: start dev server
npm start
```

Notes:
- `lite-server` serves the project and reloads on file changes.
- Edit `src/app.ts`; outputs appear in `dist/` and are served along with `index.html`.

### Running single-file examples

Many folders contain standalone `.ts` files without a `package.json`. You have a few options:

- Compile a file directly to a scratch output folder:

```bash
npx tsc PATH/TO/file.ts --outDir dist-scratch
node dist-scratch/file.js
```

- Or initialize a quick local TS project in any folder:

```bash
npm i -D typescript
npx tsc --init
npx tsc -w
```

### Learning materials

For each topic, check the `docs/` folder next to the `code-folder/` examples. The markdown files explain the concepts demonstrated by the code.

### Contributing / adding new examples

- Place code under the relevant topic directory in `Explanation-to-code/code-folder/`
- Add a matching explanation in `Explanation-to-code/docs/`
- Prefer small, focused examples with descriptive names

### Troubleshooting

- If Node cannot run the compiled files, ensure you compiled to `dist/` and are executing the right output file path.
- If imports fail, confirm your `tsconfig.json` `module` and `moduleResolution` match your runtime (Node vs browser) and folder layout.
- For continuous feedback, use `npx tsc -w` in one terminal and your server/runtime in another.
