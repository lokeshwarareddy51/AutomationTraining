let customerName: string = "John Doe";
let creditScore: number = 760;
let income: number = 5500.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0;

// // If the credit score is above 750, the loan is automatically approved.
// // o If the credit score is between 650 and 750, additional checks are performed.
// // o If the credit score is below 650, the loan is denied.

// if (creditScore > 750) {

//     console.log("Loan is approved")


// }
// else if (creditScore >= 650 && creditScore <= 750) {

//     if (income >= 55000) {
//         if (isEmployed) {
//             if (debtToIncomeRatio < 40) {

//                 console.log("loan is approved")
//             }
//             else {
//                 console.log("Loan is denied")
//             }

//         }
//         else {
//             console.log("Loan is denied")
//         }
//     }
//     else{

//          console.log("Loan is denied")
//     }

// }
// else {

//     console.log("Loan is denied")

// }




if (creditScore >= 650 && creditScore <= 750) {

    if (income >= 55000) {

        if (isEmployed && debtToIncomeRatio < 40) {

            console.log("Loan is approved");

        }
        else {

            console.log("Loan is denied");
        }
    }
    else {

        console.log("Loan is denied");
    }






}
else {

    console.log("loan is denied");
}