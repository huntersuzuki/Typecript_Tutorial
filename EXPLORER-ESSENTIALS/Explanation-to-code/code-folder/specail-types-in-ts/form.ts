// const inputElement = document.getElementById("user-name")!; // "!" operator
// indicates that the "inputElement" will not return a null value.The use,
// of this operator is very risky because if by chance a null value is
// returned, then it will cause a run-time error.

// if (!inputElement) {
//   throw new Error("Element not found");
// } // This if statement checks if the value in "inputElement" is null or not.
// And throws an error according to that.
// But there is another typeScript feature or a work around which tells the,
// compiler that the "inputElement" will not return a null value.
// Example is on line number 1.

// To access the "value" property in inputElement we have to typecast it to,
//"HTMLInputElement"
// Example -
const inputElement = document.getElementById("user-name") as HTMLInputElement;
// There is another operator "?" used for optional chaining which will only
// access an element if it's not null.
// Example -
console.log(inputElement?.value); // What this operator "?" indicates is that,
// "inputElement" can only access the "value" if it's not null or undefined.
