// data
// initial amount
// annual contribution
// expected return rate
// duration

//Custom types
type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContribution: number;
  totalInterestEarned: number;
};
type CalculationResults = InvestmentResult[] | string;

function calculatorInvestments(data: InvestmentData): CalculationResults {
  const { initialAmount, annualContribution, expectedReturn, duration } = data; //  we will destructure the types of data.
  // Validations
  if (initialAmount < 0) {
    return "Initial Amount should at least be zero";
  }
  if (duration <= 0) {
    return "No valid amount of duration provided";
  }
  if (expectedReturn < 0) {
    return "Expected return must be atleast zero";
  }

  let total = initialAmount;
  let totalContribution = 0;
  let totalInterestEarned = 0;
  const annualResults: InvestmentResult[] = [];

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn);
    totalInterestEarned = total - totalContribution - initialAmount;
    totalContribution = totalContribution + annualContribution;
    total = total + annualContribution;
    // create an object for each year
    // and push it to the annualResults array
    // we will use the i variable to get the year
    // and the total, totalInterestEarned, and totalContribution variables
    // to get the total amount, total interest earned, and total contribution
    // respectively.
    annualResults.push({
      year: `Year ${i + 1}`,
      totalAmount: total,
      totalInterestEarned,
      totalContribution,
    });
  }
  return annualResults;
}
function printResults(result: CalculationResults) {
  if (typeof result === "string") {
    console.log(result);
    return;
  }
  for (const yearEndResult of result) {
    console.log(yearEndResult.year);
    console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
    console.log(
      `Total Contributions: ${yearEndResult.totalContribution.toFixed(0)}`,
    );
    console.log(
      `Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`,
    );
    console.log("--------------------------------");
  }
}

const investmentData: InvestmentData = {
  initialAmount: 50000,
  annualContribution: 500,
  expectedReturn: 0.08,
  duration: 10,
};
const results = calculatorInvestments(investmentData);

printResults(results);
