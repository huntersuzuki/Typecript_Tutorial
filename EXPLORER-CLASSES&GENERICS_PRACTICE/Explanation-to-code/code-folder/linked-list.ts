// This code implements a generic singly linked list in TypeScript.

// The ListNode<T> class represents a single node in the linked list.
// - It stores a value of type T.
// - It has an optional reference to the next node in the list.
class ListNode<T> {
  next?: ListNode<T>;
  constructor(public value: T) {}
}

// The LinkedList<T> class manages the linked list structure.
// - It keeps track of the first node (root), the last node (tail), and the number of elements (length).
// - It is generic, so it can store any type of data.
class LinkedList<T> {
  private root?: ListNode<T>; // Head of the list
  private tail?: ListNode<T>; // Tail of the list
  private length = 0;         // Number of elements

  // Adds a new value to the end of the list.
  add(value: T) {
    const node = new ListNode(value);
    if (!this.root || !this.tail) {
      // If the list is empty, set both root and tail to the new node.
      this.root = node;
      this.tail = node;
    } else {
      // Otherwise, append the new node to the end and update the tail.
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
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

// Example usage:

// Create a linked list for numbers.
const numberList = new LinkedList<number>();

// Add some numbers to the list.
numberList.add(10);
numberList.add(50);
numberList.add(2);
numberList.add(-20);

// Print the number of elements (should be 4).
console.log(numberList.getNumberOfElements());

// Print all elements in the list.
numberList.print();

// Create a linked list for strings (empty at this point).
const nameList = new LinkedList<string>();
