

***

### Step 1: Understanding Each Type

#### **1. `FileData`**
```ts
type FileData = {
  path: string;
  content: string;
};
```
- `FileData` describes the shape of an object that represents a file.
  - `path: string;` → the file system path or location of the file.
  - `content: string;` → the actual text/data inside the file (e.g., code, markup, etc.).

Example:
```ts
const file: FileData = {
  path: "/home/user/project/index.ts",
  content: "console.log('Hello World');"
};
```

***

#### **2. `DatabaseData`**
```ts
type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};
```
- `DatabaseData` represents details about a database connection.
  - `connectionUrl: string;` → the URL used to connect to the database (e.g., `"postgres://localhost:5432/mydb"`).
  - `credentials: string;` → login details (e.g., could be username:password or a token).  

Example:
```ts
const db: DatabaseData = {
  connectionUrl: "postgres://localhost:5432/testdb",
  credentials: "username:password123"
};
```

***

#### **3. `Status`**
```ts
type Status = {
  isOpen: boolean;
  errMessage: string;
};
```
- `Status` represents a general status outcome (like from accessing a resource).
  - `isOpen: boolean;` → whether something is currently open/connected (e.g., a file or database).
  - `errMessage: string;` → error messages if something goes wrong (could be `""` if no error).

Example:
```ts
const status: Status = {
  isOpen: true,
  errMessage: ""
};
```

***

### Step 2: Combined Types Using Intersection (`&`)

#### **`accessedFileData`**
```ts
type accessedFileData = FileData & Status;
```

This means:  
👉 It's an object that has **all properties** from both `FileData` **and** `Status`.

So an `accessedFileData` must contain:
- `path: string`
- `content: string`
- `isOpen: boolean`
- `errMessage: string`

Example:
```ts
const accessedFile: accessedFileData = {
  path: "/app/config.json",
  content: "{ \"setting\": true }",
  isOpen: false,
  errMessage: "File not found"
};
```

***

#### **`accessedDatabaseData`**
```ts
type accessedDatabaseData = DatabaseData & Status;
```

This means:  
👉 It's an object that has **all properties** from both `DatabaseData` **and** `Status`.

It must contain:
- `connectionUrl: string`
- `credentials: string`
- `isOpen: boolean`
- `errMessage: string`

Example:
```ts
const accessedDb: accessedDatabaseData = {
  connectionUrl: "mongodb://localhost:27017/shop",
  credentials: "admin:securePass123",
  isOpen: true,
  errMessage: ""
};
```

***

### Step 3: Why define types this way?
1. **Separation of Concerns** → You keep `FileData`, `DatabaseData`, and `Status` independent, so each represents just one concept (file info, DB info, resource status).
2. **Reusability** → `Status` can be combined with different resource types (files, databases, network sockets, APIs, etc.) without duplicating its fields.
3. **Type Safety** → TypeScript enforces at compile time that every object with type `accessedFileData` has both file details *and* status info.

***

✅ **In summary**:  

- `FileData` = info about a file (path, content).  
- `DatabaseData` = info about a DB (connection, credentials).  
- `Status` = common status fields (isOpen, error message).  
- `accessedFileData` = a file **with its status**.  
- `accessedDatabaseData` = a database **with its status**.  

***
 Let’s see a practical and bring these type definitions to life with some **realistic TypeScript functions**.

***

## 1. File Access Example

```ts
// Already defined types from before
type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errMessage: string;
};

type accessedFileData = FileData & Status;
type accessedDatabaseData = DatabaseData & Status;

// 📝 A mock function that "opens" a file
function openFile(filePath: string): accessedFileData {
  // Simulate: if filename ends with ".txt", it opens successfully
  if (filePath.endsWith(".txt")) {
    return {
      path: filePath,
      content: "Sample content inside file",
      isOpen: true,
      errMessage: ""
    };
  }

  // Otherwise simulate an error
  return {
    path: filePath,
    content: "",
    isOpen: false,
    errMessage: "Unsupported file type"
  };
}

// Example usage
const myFile = openFile("notes.txt");
console.log(myFile);
// { path: 'notes.txt', content: 'Sample content inside file', isOpen: true, errMessage: '' }

const badFile = openFile("data.json");
console.log(badFile);
// { path: 'data.json', content: '', isOpen: false, errMessage: 'Unsupported file type' }
```

Here, the `openFile` function returns an `accessedFileData` object — i.e., both **file info** and **status of the operation**.

***

## 2. Database Access Example

```ts
// 📝 A mock function to "connect" to a database
function connectToDatabase(url: string, credentials: string): accessedDatabaseData {
  // Simulate: if credentials include "admin", it's successful
  if (credentials.includes("admin")) {
    return {
      connectionUrl: url,
      credentials,
      isOpen: true,
      errMessage: ""
    };
  }

  // Otherwise failed login
  return {
    connectionUrl: url,
    credentials,
    isOpen: false,
    errMessage: "Invalid credentials"
  };
}

// Example usage
const dbConn = connectToDatabase("postgres://localhost:5432/mydb", "admin:1234");
console.log(dbConn);
// { connectionUrl: 'postgres://localhost:5432/mydb', credentials: 'admin:1234', isOpen: true, errMessage: '' }

const badConn = connectToDatabase("postgres://localhost:5432/mydb", "guest:wrongpwd");
console.log(badConn);
// { connectionUrl: 'postgres://localhost:5432/mydb', credentials: 'guest:wrongpwd', isOpen: false, errMessage: 'Invalid credentials' }
```

***

## 3. Why This Is Useful
By returning `accessedFileData` or `accessedDatabaseData`, your functions give back not only the **data** (path, content, connection details) but also the **status** of whether the operation succeeded or failed — all **type safe** thanks to TypeScript.

***

✨ So in practice:
- If you’re writing a function for **resources** (files, DBs, sockets), you can **combine their data type with `Status`**.
- This avoids having to return multiple unrelated values or relying only on exceptions.

***
