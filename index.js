import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    SAR: 3.75
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'SAR']
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'SAR']
    },
    {
        name: "amount",
        message: "Enter your Ammount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
