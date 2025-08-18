//Getters and Setters in TypeScript.

// Getter Example.
// class User {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//   ) {}
//   // This is a getter property which can access private properties from the constructor.
//   get fulllName() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const pb = new User("Pranay", "Bhoir");
// console.log(pb.fulllName); // We cannot access the firstName and the lastName, but we can accedd the fullName property.

// Setter and Static Example.
// In Setter, we do not need constructor.
// class User {
//   private _firstName: string = "";
//   private _lastName: string = "";
//
//   // Here with the use of setters the values of the properties are manually set with the use of 'set' keyword.
//   set firstName(name: string) {
//     if (name === "") {
//       throw new Error("Invalid name");
//     }
//     this._firstName = name;
//   }
//   set lastName(name: string) {
//     if (name === "") {
//       throw new Error("Invalid name");
//     }
//     this._lastName = name;
//   }
//
//   // This is a getter property which can access private properties from the constructor.
//   get fulllName() {
//     return this._firstName + " " + this._lastName;
//   }
//
//   static e_id = "USER"; // Created a property using static keyword
//   static greet() {
//     console.log("Hello");
//   }
// }
// const pb = new User();
// console.log(User.e_id); // Because of the use of static keyword we don't have to create the object of the class to access the property.
// User.greet(); // Accessing a static method/function.
// pb.firstName = "Pranay";
// pb.lastName = "Bhoir";
// console.log(pb.fulllName);
