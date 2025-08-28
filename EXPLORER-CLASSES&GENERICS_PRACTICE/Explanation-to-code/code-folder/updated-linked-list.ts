// This TypeScript code implements a generic singly linked list with basic operations.
// Let's break down each part:

export {};

// 1. ListNode<T> class
//    - Represents a single node in the linked list.
//    - Stores a value of type T and an optional reference to the next node.
class ListNode<T> {
  next?: ListNode<T>;
  constructor(public value: T) {}
}

// 2. LinkedList<T> class
//    - Manages the linked list, keeping track of the head (root), tail, and length.
//    - Provides methods to add, insert, remove, count, and print elements.
class LinkedList<T> {
  private root?: ListNode<T>;   // First node in the list
  private tail?: ListNode<T>;   // Last node in the list
  private length = 0;           // Number of elements in the list

  // Adds a new value at the end of the list (O(1) time).
  add(value: T) {
    const node = new ListNode(value);
    if (!this.root || !this.tail) {
      // If the list is empty, set both root and tail to the new node.
      this.root = node;
      this.tail = node;
    } else {
      // Otherwise, append to the end and update the tail.
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  // Inserts a value at a specific position (O(n) time).
  // Returns true if successful, false if the position is invalid.
  insertAt(value: T, pos: number) {
    if (pos > -1 && pos < this.length && this.root) {
      let current = this.root;
      let index = 0;
      let previous = current;
      let node = new ListNode(value);

      if (pos === 0) {
        // Insert at the head.
        node.next = this.root;
        this.root = node;
      } else {
        // Traverse to the correct position.
        while (index++ < pos && current.next) {
          previous = current;
          current = current.next;
        }
        // Insert the new node between previous and current.
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true;
    } else {
      // Invalid position.
      return false;
    }
  }

  // Removes the node at the specified position (O(n) time).
  // Returns the removed node, or null if the position is invalid.
  removeAt(pos: number) {
    if (pos > -1 && pos < this.length && this.root) {
      let current = this.root;
      let previous: ListNode<T> = current;
      let index = 0;

      if (pos === 0) {
        // Remove the head.
        this.root = current.next;
      } else {
        // Traverse to the node before the one to remove.
        while (index++ < pos && current.next) {
          previous = current;
          current = current.next;
        }
        // Bypass the node to remove it.
        previous.next = current.next;
      }
      this.length--;
      return current;
    } else {
      // Invalid position.
      return null;
    }
  }

  // Returns the number of elements in the list.
  getNumberOfElements() {
    return this.length;
  }

  // Prints all values in the list, one per line.
  print() {
    let current = this.root;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// --- Example usage ---

// Create a linked list of numbers.
const numberList = new LinkedList<number>();

numberList.add(10);    // List: 10
numberList.add(5);     // List: 10 -> 5
numberList.add(-3);    // List: 10 -> 5 -> -3

console.log("Length: " + numberList.getNumberOfElements()); // Output: 3
numberList.print(); // Output: 10, 5, -3

console.log("--- NOW REMOVING INDEX 1 ---");
numberList.removeAt(1); // Removes the value 5
console.log("Length: " + numberList.getNumberOfElements()); // Output: 2
numberList.print(); // Output: 10, -3

console.log("--- NOW INSERTING AT INDEX 1 ---");
numberList.insertAt(100, 1); // Inserts 100 between 10 and -3
console.log("Length: " + numberList.getNumberOfElements()); // Output: 3
numberList.print(); // Output: 10, 100, -3

// Create a linked list of strings.
const nameList = new LinkedList<string>();
