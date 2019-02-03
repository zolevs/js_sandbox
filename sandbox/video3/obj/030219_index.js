let myAccount = {
    name: 'Zozon',
    expenses: 0,
    income: 0
};


let otherAccount = myAccount;
otherAccount.income = 92;

let addExpense = function(account, amount){
    account.expenses = account.expenses + amount;
}

addExpense(myAccount, 2.5);
// console.log(myAccount);

// add income to the account 
// addIncome
let addIncome = function (account, amount){
    account.income += amount;
}

// resetAccount (expenses = 0, income = 0)
let resetAccount = function(account){
    account.expenses = 0;
    account.income = 0;
}

// getAccountSummary
// Account for Zozon has $99. $10 in income and $5 in expenses.
let getAccountSummary = function (account){
    console.log(`Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses`);
}

console.log(myAccount);
let payCheck = addIncome(myAccount, 1000);
let endOfMonth = getAccountSummary(myAccount);
console.log(myAccount);
let reset = resetAccount(myAccount);

console.log(myAccount);