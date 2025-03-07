"use strict";
//Index Signatures
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todayTransactions.Pizza);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transction in transactions) {
        total += transactions[transction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
