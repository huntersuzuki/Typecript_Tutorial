// class User {
//   name: string;
//   age: number;
//
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }

// A compact method/shortcut to create a class.
// The public keyword will automatically create a properties of the
// constructor parameters.
// class User {
//   constructor(
//     public name: string,
//     public age: number,
//   ) {}
// }

// class User {
//   public hobbies: string[] = [];
//   constructor(
//     public name: string,
//     private age: number,
//   ) {}
//   greet() {
//     console.log("Hii" + this.age);
//   }
// }
// class User {
//   readonly hobbies: string[] = [];
//   constructor(
//     public name: string,
//     private readonly age: number,
//   ) {}
//   greet() {
//     console.log("Hii" + this.age);
//   }
// }
//
// const pb = new User("Pranay", 24);
// const tb = new User("Manisha", 45);
// // The readonly keyword when assigned, the property can only be accessed.
// // You cannot re-assign new values.
// // Example -
// pb.hobbies = ["Cricket", "Gaming"]; // A new value is being reassigned, Which is not allowed.
// // What's allowed?
// pb.hobbies.push("Cricket"); // Push is allowed as it is not assigning new values but rather mutating existing array.
// console.log(pb, tb);
