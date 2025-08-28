
Let’s go through it step by step.

***

# 1. `ListNode` Class
```ts
class ListNode<T> {
  next?: ListNode<T>;
  constructor(public value: T) {}
}
```

- **Purpose:** represents a single "node" of the linked list.
- `value: T` → the actual data stored in the node.
- `next?: ListNode<T>` → optional pointer to the next node in the list. If undefined, then this node is the last one.

Example: a node with `value = 5` might look like:

```
{ value: 5, next: → [Node with 10] }
```

***

# 2. `LinkedList` Class
```ts
class LinkedList<T> {
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;
```

- `root` → the first node (head).
- `tail` → the last node (so append is fast, **O(1)**).
- `length` → counter of how many nodes exist.

At the start, the list is empty (`root = undefined`, `tail = undefined`, `length = 0`).

***

## 2.1 Adding elements (`add`)
```ts
add(value: T) {
  const node = new ListNode(value);
  if (!this.root || !this.tail) {
    this.root = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
}
```

**Behavior:**
- Creates a node.
- If list is empty: both `root` and `tail` point to this node.
- Otherwise: appends after `tail`, updates `tail`.
- Increases length.

✅ Complexity: **O(1)** (thanks to the `tail` pointer).

***

## 2.2 Inserting elements at a position (`insertAt`)
```ts
insertAt(value: T, pos: number) {
  if (pos > -1 && pos < this.length && this.root) {
    let current = this.root;
    let index = 0;
    let previous = current;
    let node = new ListNode(value);

    if (pos === 0) {
      node.next = this.root;
      this.root = node;
    } else {
      while (index++ < pos && current.next) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
    this.length++;
    return true;
  } else {
    return false;
  }
}
```

- First checks if `pos` is a valid index: between `0` and `length-1`.
- Case 1: `pos == 0` → inserting at the head.
  - New node points to old `root`.
  - Update `root` to new node.
- Case 2: general case.
  - Traverse until position.
  - `previous.next = node`, then `node.next = current` (so it sits in the middle).
- Increases length.
- Returns `true` if success, otherwise `false`.

✅ Complexity: **O(n)** (must traverse to `pos`).

***

## 2.3 Removing elements at a position (`removeAt`)
```ts
removeAt(pos: number) {
  if (pos > -1 && pos < this.length && this.root) {
    let current = this.root;
    let previous: ListNode<T> = current;
    let index = 0;

    if (pos === 0) {
      this.root = current.next; // just skip over first element
    } else {
      while (index++ < pos && current.next) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next; // bridge over the current node
    }
    this.length--;
    return current;
  } else {
    return null;
  }
}
```

- Checks if `pos` is valid.
- Case 1: removing head (`pos = 0`).
  - `root` is replaced with its `next`.
- Case 2: general removal.
  - Traverse nodes until index is reached.
  - Skip the node by doing `previous.next = current.next`.
- Updates `length`.
- Returns the removed node or `null` if index was invalid.

✅ Complexity: **O(n)**.

***

## 2.4 Get number of elements
```ts
getNumberOfElements() {
  return this.length;
}
```
Just returns the count of elements. `O(1)`.

***

## 2.5 Print all elements
```ts
print() {
  let current = this.root;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}
```
Traverses the list starting at root and prints each node’s value. `O(n)`.

***

# 3. Using the Linked List

### Step 1: Create a number list
```ts
const numberList = new LinkedList<number>();

numberList.add(10);
numberList.add(5);
numberList.add(-3);
```

- List is now:
```
10 -> 5 -> -3 -> null
```
- Length: 3

***

### Step 2: Print length and elements
```
Length: 3
10
5
-3
```

***

### Step 3: Remove element at index `1`
```ts
numberList.removeAt(1);
```
- Index `1` = element `5`.
- Removes it by linking `10` → `-3`.

New list:
```
10 -> -3 -> null
```
- Length: 2

Output:
```
--- NOW REMOVING INDEX 1 ---
Length: 2
10
-3
```

***

### Step 4: Insert element at index `1`
```ts
numberList.insertAt(100, 1);
```
- Inserts `100` between `10` and `-3`.

New list:
```
10 -> 100 -> -3 -> null
```
- Length: 3

Output:
```
--- NOW INSERTING AT INDEX 1 ---
Length: 3
10
100
-3
```

***

### Step 5: Create a string list
```ts
const nameList = new LinkedList<string>();
```
- Creates a new linked list for strings (`<string>` type parameter) that works the same way.

Example:
```ts
nameList.add("Alice");
nameList.add("Bob");
```

Would become:
```
"Alice" -> "Bob" -> null
```

***

# 🔑 **Summary**
- **`ListNode`**: building block (value + pointer to next).
- **`LinkedList`**: manages references to root, tail, and length.
- **`add`**: append at end (O(1)).
- **`insertAt`**: insert at any index (O(n)).
- **`removeAt`**: remove at any index (O(n)).
- **`print`**: iterate and log all values.
- **Generics `<T>`**: reusable for any type (`number`, `string`, custom objects).

***
