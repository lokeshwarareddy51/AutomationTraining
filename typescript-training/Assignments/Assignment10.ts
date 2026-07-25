
let prices: number[] = [1, 1, 5, 3, 9, 4];

let minprice = prices[0];
let maxprofit = 0;

for (let i = 0; i < prices.length; i++) {


    if (prices[i] < minprice) {

        minprice = prices[i]
    }

    let profit = prices[i] - minprice;

    if (profit > maxprofit) {

        maxprofit = profit;
    }



}
console.log(maxprofit);