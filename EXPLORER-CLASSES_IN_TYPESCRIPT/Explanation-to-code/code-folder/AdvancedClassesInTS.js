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
// Setter Example.
// In Setter, we do not need constructor.
var User = /** @class */ (function () {
    function User() {
        this._firstName = "";
        this._lastName = "";
    }
    Object.defineProperty(User.prototype, "firstName", {
        set: function (name) {
            if (name === "") {
                throw new Error("Invalid name");
            }
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        set: function (name) {
            if (name === "") {
                throw new Error("Invalid name");
            }
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fulllName", {
        // This is a getter property which can access private properties from the constructor.
        get: function () {
            return this._firstName + " " + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var pb = new User();
pb.firstName = "Pranay";
pb.lastName = "Bhoir";
console.log(pb.fulllName);
