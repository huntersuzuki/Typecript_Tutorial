// data
// initial amount
// annual contribution
// expected return rate
// duration
function calculatorInvestments(data) {
    var initialAmount = data.initialAmount, annualContribution = data.annualContribution, expectedReturn = data.expectedReturn, duration = data.duration; //  we will destructure the types of data.
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
    var total = initialAmount;
    var totalContribution = 0;
    var totalInterestEarned = 0;
    var annualResults = [];
    for (var i = 0; i < duration; i++) {
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
            year: "Year ".concat(i + 1),
            totalAmount: total,
            totalInterestEarned: totalInterestEarned,
            totalContribution: totalContribution,
        });
    }
    return annualResults;
}
function printResults(result) {
    if (typeof result === "string") {
        console.log(result);
        return;
    }
    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
        var yearEndResult = result_1[_i];
        console.log(yearEndResult.year);
        console.log("Total: ".concat(yearEndResult.totalAmount.toFixed(0)));
        console.log("Total Contributions: ".concat(yearEndResult.totalContribution.toFixed(0)));
        console.log("Total Interest Earned: ".concat(yearEndResult.totalInterestEarned.toFixed(0)));
        console.log("--------------------------------");
    }
}
var investmentData = {
    initialAmount: 50000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};
var results = calculatorInvestments(investmentData);
printResults(results);
