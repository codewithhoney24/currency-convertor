#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow.bold('\n\t WELCOME TO  CODEWITHHONEY-CURRENCY CONVERTOR.\n'));

// Define the list of currencies and their exchange rates
let exchange_rate_List : any = {
    "USD" : 1,       // "USD"(Base Currency)
    "EUR" : 0.9,  //European  EURO
    "GBP" : 1.24,   //British pound
    "AUD" : 0.64,    //Australian Dollar
    "CAD" : 0.73,  //Canadian Dollar
    "CHF" : 1.10,    //Swiss franc
    "CNY" : 0.14,     //chinese yuan
    "HKD" : 0.13,      //Hong Kong Dollar
    "JPY" : 0.59,       //japanese yen
    "NZD" : 0.0065,   //New Zealand Dollar
    "SGD" : 0.73,    //Singapore Dollar
    "SEK" : 0.091,     //Swedish krona
    "TWD" : 0.031,      //New Taiwan Dollar
    "PKR" : 278.25,  //Pakistan rupees
}
// Prompt the user to select a currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        type: "list",
        name: "from_currency",
        message: "Select a currency to convert from :",
        choices: Object.keys(exchange_rate_List),
    },
    {
        type: "list",
        name: "to_currency",
        message: "Select a currency to convert into :",
        choices: Object.keys(exchange_rate_List),
    },
    {
        type: "input",
        name: "amount",
        message: "Enter the amount to convert : ",
    }
]);
//Perform the currency conversion  by using formula
let from_amount = exchange_rate_List[user_answer.from_currency];
let to_amount = exchange_rate_List[user_answer.to_currency];
let amount = user_answer.amount

//Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount


//Display the conversion amount
console.log(chalk.blue.bold(`\n${amount} ${user_answer.from_currency} , Converted Amount = ${chalk.green.bold(converted_amount)}  ${chalk.green.bold(user_answer.to_currency)}\n`));






