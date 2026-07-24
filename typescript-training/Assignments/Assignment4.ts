let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditcount = 0;
let debitcount = 0;
let creditamount = 0;
let debitamount = 0;
let remainingAmount = 0;

for (let i = 0; i < transactions.length; i++) {

    if (transactions[i]! > 0) {

        creditcount++;
        creditamount += transactions[i]!;
        if (transactions[i]! > 10000) {

            console.log(`Suspicious credit Transaction with amount ${transactions[i]}`)

        }

    }
    else {

        debitcount++;
        debitamount += transactions[i]!;

        if (transactions[i]! < -10000) {

            console.log(`Suspicious debit Transaction with amount ${transactions[i]}`)

        }
    }



}
remainingAmount = creditamount + debitamount;
console.log(creditcount);
console.log(debitcount);
console.log(creditamount);
console.log(debitamount);
console.log(remainingAmount);