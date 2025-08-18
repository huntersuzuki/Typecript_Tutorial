interface Authenticable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
} // in interface, we don't add any logic to the code but just define,
// our objects or methods or variable, etc.
// Now we then implement this interface to the class or another object
// to access all the defined objects or variable of the interface.

// in interfaces, we have another feature called declaration merging,
// where you can add multiple properties in the interface by using the following method.
// TypeScript behind the scene automatically merges the declaration into one.
interface Authenticable {
  role: string;
}

// Example -

// we made the interface as the type of the object user.
let user: Authenticable;

// this is how we implemented the interface into the user object.
user = {
  email: "example@gmail.com",
  password: "1234",
  login() {
    console.log(this.email + "Successfully logged in!");
  },
  logout() {
    console.log(this.email + "Successfully logged out!");
  },
  role: "admin",
};

// A lesser known but nonetheless interesting feature of TypeScript interfaces is that you can also use them to define function types.
//
// For example, you might want to define the type of sum function that takes two numbers as input and returns their sum.
//
//   You could write this code:

// type SumFn = (a: number, b: number) => number; // function type
//
// let sum: SumFn; // making sure sum can only store values of that function type

// sum = (a, b) => a + b; // assigning a value that adheres to that function type
// Alternatively, you can also define the SumFn type via an interface:

// interface SumFn {
//   (a: number, b: number): number;
// }
// It's up to you which alternative you prefer.
//
// Typically, you'll encounter the first version (type SumFn) more often, but it's worth knowing about the alternative, too.
