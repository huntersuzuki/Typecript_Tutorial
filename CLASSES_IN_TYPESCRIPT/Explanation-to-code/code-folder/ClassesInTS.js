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
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var pb = new User("Pranay", 24);
var tb = new User("Manisha", 45);
console.log(pb, tb);
