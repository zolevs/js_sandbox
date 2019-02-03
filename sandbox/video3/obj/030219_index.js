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
console.log(myAccount);
