

---

## 🧠 **1. What is this code about?**

You are building a **financial calculator** that:

* Takes in some investment inputs: how much money you're starting with, how much you add every year, your expected interest rate, and how long you’ll invest.
* Calculates how your investment grows year by year.
* Returns either a list of results or an error message if something is wrong with the inputs.
* Prints the results in a human-readable format.

---

## 📦 2. **TypeScript Data Types and Custom Types**

### ✅ **Custom Type: `InvestmentData`**

```ts
type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};
```

🔍 Explanation:

* You're defining a **custom type** using the `type` keyword.
* `InvestmentData` describes what a valid input object should look like.
* It must have:

    * `initialAmount`: starting money (e.g., ₹50,000)
    * `annualContribution`: how much you add every year (e.g., ₹500)
    * `expectedReturn`: annual interest rate (e.g., 0.08 = 8%)
    * `duration`: number of years you'll invest

> This helps TypeScript **enforce structure** and catch errors early.

---

### ✅ **Custom Type: `InvestmentResult`**

```ts
type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContribution: number;
  totalInterestEarned: number;
};
```

* This represents the result for **each year**.
* `year`: like "Year 1", "Year 2"
* `totalAmount`: total value of your investment at the end of that year
* `totalContribution`: how much you've added in total so far
* `totalInterestEarned`: how much profit/interest you've earned

---

### ✅ **Custom Type: `CalculationResults`**

```ts
type CalculationResults = InvestmentResult[] | string;
```

* This means: the result will either be:

    * A list (array) of `InvestmentResult` OR
    * A string (like an error message)

---

## 🧮 3. **The Calculation Function**

### 🔧 Function Signature:

```ts
function calculatorInvestments(data: InvestmentData): CalculationResults
```

* `data`: must match the structure of `InvestmentData`
* `: CalculationResults`: function will return either:

    * An array of results
    * Or an error message string

---

### 🔍 Destructuring Input:

```ts
const { initialAmount, annualContribution, expectedReturn, duration } = data;
```

This is shorthand for:

```ts
const initialAmount = data.initialAmount;
const annualContribution = data.annualContribution;
...
```

Destructuring makes the code shorter and easier to read.

---

### ✅ **Validations**

```ts
if (initialAmount < 0) {
  return "Initial Amount should at least be zero";
}
```

* If initial amount is negative, return error.

Same idea for:

```ts
if (duration <= 0) {
  return "No valid amount of duration provided";
}
if (expectedReturn < 0) {
  return "Expected return must be at least zero";
}
```

> ❗ These checks help prevent invalid input and return a string (error message) instead of continuing the calculation.

---

### 🔁 The Core Loop (Year-by-Year Calculation):

```ts
let total = initialAmount;
let totalContribution = 0;
let totalInterestEarned = 0;
const annualResults: InvestmentResult[] = [];

for (let i = 0; i < duration; i++) {
```

This sets up variables and runs a loop from year 0 to year (duration - 1).

#### 💰 Inside the loop:

```ts
total = total * (1 + expectedReturn);
```

* Compound interest: you grow the total by the return rate (e.g., 8% = ×1.08)

```ts
totalInterestEarned = total - totalContribution - initialAmount;
```

* Calculates interest earned so far by subtracting your own money (initial + contributions) from total value.

```ts
totalContribution = totalContribution + annualContribution;
```

* Adds this year's ₹500 (or whatever) to your total contributions.

```ts
total = total + annualContribution;
```

* Adds your yearly contribution after interest is calculated.

---

### 📋 Store the Results:

```ts
annualResults.push({
  year: `Year ${i + 1}`,
  totalAmount: total,
  totalInterestEarned,
  totalContribution,
});
```

* Create an object for the year and push it to the array.

---

### ✅ Return the Final Results:

```ts
return annualResults;
```

> If all inputs are valid, return the array of `InvestmentResult`.

---

## 📤 4. **Printing the Results**

```ts
function printResults(result: CalculationResults)
```

* Takes either an error string or a list of yearly results.

```ts
if (typeof result === "string") {
  console.log(result);
  return;
}
```

* If it’s an error, just print it and stop.

### 🖨️ Print each year’s info:

```ts
for (const yearEndResult of result) {
  console.log(yearEndResult.year);
  console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
  ...
}
```

* `.toFixed(0)` removes decimal points (for cleaner display)

---

## 🧪 5. Sample Usage

```ts
const investmentData: InvestmentData = {
  initialAmount: 50000,
  annualContribution: 500,
  expectedReturn: 0.08,
  duration: 10,
};
```

* This matches your custom `InvestmentData` type
* You're investing ₹50,000, adding ₹500 every year, at 8% interest for 10 years

```ts
const results = calculatorInvestments(investmentData);
printResults(results);
```

---

## 🧠 Beginner Takeaways:

### 🔸 What You Learned:

| Concept                      | Description                                       |
| ---------------------------- | ------------------------------------------------- |
| `type`                       | Custom type alias to define object structure      |
| `number`, `string`           | Basic TypeScript data types                       |
| `function`: type annotations | You defined both input and return types           |
| Error Handling               | You returned error strings instead of crashing    |
| Type Safety                  | TS ensures you pass and handle correct structures |

---

## ✅ Final Tip:

Try changing values like `initialAmount` to `-1000` or `duration` to `0` and observe how TypeScript and your function handle the error.

