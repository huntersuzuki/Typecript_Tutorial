var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User() {
        // private _firstName: string = "";
        // private _lastName: string = "";
        // Because the private object/variable are not accessible to the extended class,
        // We use protected instead of private as an access-specifier/modifier, because of this feature,
        // we can use the objects or variable inside the extended class but cannot access outside the class,
        // this gives it a security advantage.
        this._firstName = "";
        this._lastName = "";
    }
    Object.defineProperty(User.prototype, "firstName", {
        // Here with the use of setters the values of the properties are manually set with the use of 'set' keyword.
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
    User.greet = function () {
        console.log("Hello");
    };
    User.e_id = "USER"; // Created a property using static keyword
    return User;
}());
var pb = new User();
console.log(User.e_id); // Because of the use of static keyword we don't have to create the object of the class to access the property.
User.greet(); // Accessing a static method/function.
pb.firstName = "Pranay";
pb.lastName = "Bhoir";
console.log(pb.fulllName);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(jobTitle) {
        var _this = _super.call(this) || this; // This keyword is used to call the base class/parent class constructor.
        _this.jobTitle = jobTitle;
        return _this;
        // super.firstName = "Pranay" // We can also use the super keyword to access the parent class/base class methods/functions.
    }
    Employee.prototype.work = function () {
        console.log(this._firstName);
        console.log((this.firstName = "Pranay"));
    };
    return Employee;
}(User));
