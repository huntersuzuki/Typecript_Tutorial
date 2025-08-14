Alright — let’s go through this **step-by-step** because your code combines:

- **TypeScript type definitions**
- **Destructuring**
- **Validations**
- **Interest calculation loop**
- **Dynamic result building**
- **Function overloading style via union return type**
- **Formatted console output**

***

## **1. The Goal of This Code**
You’re building a **compound interest + contributions investment calculator** in TypeScript.

Given:
- Initial investment amount
- Annual contribution
- Expected annual return (as a percentage/decimal)
- Duration in years

It returns a **year-by-year breakdown** of:
- Total account value at year-end
- Total contributions so far
- Total interest earned so far

OR…  
An **error string** if inputs are invalid.

***

## **2. Type Definitions**
```ts
type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};
```
- Defines the **input object** shape.
- Ensures the caller always passes those **4 numeric fields**.
- Example:
  ```ts
  const data: InvestmentData = {
    initialAmount: 50000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
  };
  ```

```ts
type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContribution: number;
  totalInterestEarned: number;
};
```
- Defines the shape for **one year’s result**.
- Each year gets:
    - `year` → label ("Year 1", "Year 2"…)
    - `totalAmount` → total portfolio value after contributions/interest
    - `totalContribution` → sum of contributions so far
    - `totalInterestEarned` → interest earned so far overall

```ts
type CalculationResults = InvestmentResult[] | string;
```
- Union type:
    - Either an **array of yearly results**
    - Or a **string** (used for error messages)

***

## **3. The Calculation Function**
```ts
function calculatorInvestments(data: InvestmentData): CalculationResults {
  const { initialAmount, annualContribution, expectedReturn, duration } = data;
```
- **Destructuring** lets you extract the 4 properties directly into local variables.

### **Validation**
```ts
if (initialAmount < 0) {
  return "Initial Amount should at least be zero";
}
if (duration <= 0) {
  return "No valid amount of duration provided";
}
if (expectedReturn < 0) {
  return "Expected return must be atleast zero";
}
```
- Checks for invalid input.
- Returns a **string error** if input values don't make sense.

***

### **Initial Setup**
```ts
let total = initialAmount;
let totalContribution = 0;
let totalInterestEarned = 0;

const annualResults: InvestmentResult[] = [];
```
- `total` → The portfolio balance at any given time (starting with `initialAmount`).
- `totalContribution` → Tracks **all contributions made so far** (NOT including initial investment).
- `totalInterestEarned` → Tracks **cumulative** interest.
- `annualResults` → Array to store results for each year.

***

### **The Loop — Year-by-Year Calculation**
```ts
for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn); // apply interest
    totalInterestEarned = total - totalContribution - initialAmount; // recalc total interest so far
    totalContribution = totalContribution + annualContribution; // add this year's contribution count
    total = total + annualContribution; // deposit after interest
```
Yearly steps:
1. **Apply interest**:  
   Example → if `total = 1000` and rate = `0.08` (8%):
   ```ts
   total = total * 1.08
   ```
2. **Recalculate interest earned**:
   ```
   Interest so far = Current total
                     - All contributions so far
                     - Initial investment
   ```
3. **Update contributions** (add this year’s deposit).
4. **Add contribution to the total balance**.

***

### **Store Annual Result**
```ts
    annualResults.push({
      year: `Year ${i + 1}`,
      totalAmount: total,
      totalInterestEarned,
      totalContribution,
    });
```
- Push an object for the current year into `annualResults`.

***

### **Return Results**
```ts
return annualResults;
```
- If no validation errors occur, return the yearly breakdown array.

***

## **4. Printing Results**
```ts
function printResults(result: CalculationResults) {
  if (typeof result === "string") {
    console.log(result);
    return;
  }
  for (const yearEndResult of result) {
    console.log(yearEndResult.year);
    console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
    console.log(`Total Contributions: ${yearEndResult.totalContribution.toFixed(0)}`);
    console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
    console.log("--------------------------------");
  }
}
```
- If the result is a **string** → print error message.
- If it’s an array:
    - Loops through each year
    - Outputs:
        - Year number
        - Total balance (`toFixed(0)` → no decimal points)
        - Contributions so far
        - Interest earned so far
    - Adds a separator.

***

## **5. Running the Program**
```ts
const investmentData: InvestmentData = {
  initialAmount: 50000,
  annualContribution: 500,
  expectedReturn: 0.08, // 8%
  duration: 10,
};

const results = calculatorInvestments(investmentData);
printResults(results);
```

### Example Output:
If you ran this, you’d see something like:
```
Year 1
Total: 54540
Total Contributions: 500
Total Interest Earned: 4040
--------------------------------
Year 2
Total: 59303
Total Contributions: 1000
Total Interest Earned: 5303
--------------------------------
...
```

***

## **6. Key TypeScript Concepts Used**
- **Type aliases** for clearer, reusable object shapes.
- **Union types** to handle both success and error cases.
- **Destructuring** to pull fields from an object.
- **Loop computation** for compound interest.
- **Encapsulation of logic** into two functions: `calculatorInvestments()` & `printResults()`.
- **Template literals** for formatting strings dynamically (`Year ${i+1}`).

***

💡 **Potential Improvement**:  
Right now, contributions are added **after** applying interest in each year.  
Some real investment models add contributions **at the start of the year** before interest is applied — that changes results slightly.

***
